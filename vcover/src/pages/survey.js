import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import SurveyButton from '../components/surveybutton.js';
import {
  getSurvey,
  getTotalQuestions,
  getSurveyQuestion,
} from '../data/surveydata';
import { COLORS } from '../style/colors';
import { DEFAULT_FONT } from '../style/fonts';
import { CONFIG } from '../data/config';
import { ScrollView } from 'react-native-gesture-handler';

const Survey = ({ navigation, route }) => {
  const [qNum, setQNum] = useState(0);
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(0);
  const [selected3, setSelected3] = useState(0);
  const [selected4, setSelected4] = useState(0);
  const [maxForward, setMaxForward] = useState(0);
  const [completeSurveyButtonColor, setCompleteSurveyButtonColor] = useState(COLORS.lightTextColor);

  const topBarWidth = {
    width: (Dimensions.get('window').width * 0.7) / getTotalQuestions(),
  };

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    CONFIG.surveyAnswers["subanswer"] = [];
  };

  const backHandler = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);
    } else {
      navigation.goBack();
    }
  };

  const nextHandler = () => {
    if (qNum < 5) {
      setQNum(qNum + 1);
    }
  };

  const pressed = (pressedNum) => {
    if (qNum < getTotalQuestions() - 1) {
      setQNum(qNum + 1);
      switch (qNum + 1) {
        case 1:
          setSelected1(pressedNum);
          setMaxForward(1);
          break;
        case 2:
          setSelected2(pressedNum);
          setMaxForward(2);
          break;
        case 3: setSelected3(pressedNum);
          setMaxForward(3);
          break;
      }
    } else {
      setSelected4(pressedNum);
      setCompleteSurveyButtonColor(COLORS.buttonGreen);
    }
  };

  const getSelected = () => {
    let selected = 0;
    switch (qNum) {
      case 0:
        selected = selected1;
        break;
      case 1:
        selected = selected2;
        break;
      case 2:
        selected = selected3;
        break;
      case 3:
        selected = selected4;
        break;
    }

    return selected;

  }

  const completeSurvey = () => {
    if (completeSurveyButtonColor === COLORS.buttonGreen) {
      CONFIG.surveyAnswers["subanswer"].push({ "option": String(selected1), "questionId": 1 });
      CONFIG.surveyAnswers["subanswer"].push({ "option": String(selected2), "questionId": 2 });
      CONFIG.surveyAnswers["subanswer"].push({ "option": String(selected3), "questionId": 3 });
      CONFIG.surveyAnswers["subanswer"].push({ "option": String(selected4), "questionId": 4 });
      CONFIG.surveyAnswers["beforeAfter"] = !CONFIG.surveyDone;
      sendSurveyAnswers();
    }
  }

  const sendSurveyAnswers = () => {
    console.info(JSON.stringify(CONFIG.surveyAnswers))
    CONFIG.diet = 0; CONFIG.gis = 0; CONFIG.ans = 0; CONFIG.psychologic = 0;
    if (CONFIG.surveyAnswers["subanswer"][0]["option"] === "1") {
      CONFIG.diet += 1;
    }
    if (CONFIG.surveyAnswers["subanswer"][1]["option"] === "1") {
      CONFIG.gis += 1;
    }
    if (CONFIG.surveyAnswers["subanswer"][2]["option"] === "1") {
      CONFIG.ans += 1;
    }
    if (CONFIG.surveyAnswers["subanswer"][3]["option"] === "1") {
      CONFIG.ans += 1;
      CONFIG.psychologic += 1;
    }

    navigation.navigate('Results');
  };

  var rows = [];

  const getTopBars = () => {
    for (var i = 0; i <= qNum; i++) {
      rows.push(<View style={[styles.blueViewStyle, topBarWidth]} key={i} />);
    }
    for (var j = qNum + 1; j < getTotalQuestions(); j++) {
      rows.push(<View style={[styles.greyViewStyle, topBarWidth]} key={j} />);
    }
    return rows;
  };

  return (
    <Container>
      <ScrollView>
        <View style={styles.topBarView}>
          <View style={styles.leftView}>
            <Icon
              name="arrow-back"
              style={styles.leftIconStyle}
              onPress={() => {
                backHandler();
              }}
            />
          </View>
          <View style={styles.middleView}>{getTopBars()}</View>
          <View style={styles.rightView} >
            {qNum < maxForward ? <Icon
              name="arrow-forward"
              style={styles.leftIconStyle}
              onPress={() => {
                nextHandler();
              }}
            /> : null}
          </View>
        </View>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.surveyText}>{getSurveyQuestion(qNum)}</Text>
          <SurveyButton
            text={getSurvey(qNum, 0)}
            onPress={() => {
              pressed(1);
            }}
            backgroundColor={getSelected() === 1 ? COLORS.darkBlueBox : 'white'}
          />
          <SurveyButton
            text={getSurvey(qNum, 1)}
            onPress={() => {
              pressed(2);
            }}
            backgroundColor={getSelected() === 2 ? COLORS.darkBlueBox : 'white'}
          />
          {qNum === 3 ? <View style={styles.completeButtonView}>
            <SurveyButton
              text="Complete Survey"
              backgroundColor={completeSurveyButtonColor}
              onPress={() => {
                completeSurvey();
              }}
            />
          </View> : <View></View>}
        </Content>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    marginBottom: '5%'
  },
  imageStyle: {
    width: '50%',
    height: undefined,
    marginBottom: '1%',
  },
  imageView: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  surveyText: {
    width: '70%',
    textAlign: 'center',
    fontFamily: DEFAULT_FONT,
    fontSize: 18,
    color: COLORS.darkerTextColor,
    marginVertical: 12,
  },
  topBarView: {
    marginVertical: 32,
    flexDirection: 'row'
  },
  leftView: {
    flex: 3,
    height: 50,
  },
  middleView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 19,
  },
  rightView: {
    flex: 3,
    flexDirection: 'row',
  },
  leftIconStyle: {
    color: COLORS.blueTextColor,
    padding: 8,
    marginTop: 4,
    marginLeft: 2,
    fontSize: 26,
  },
  blueViewStyle: {
    backgroundColor: COLORS.darkBlueBox,
    height: '5%',
    margin: 1,
  },
  greyViewStyle: {
    backgroundColor: COLORS.lightBlueBox,
    height: '5%',
    margin: 1,
  },
  completeButtonView: {
    width: '100%',
    alignItems: 'flex-end'
  }
});

export default Survey;
