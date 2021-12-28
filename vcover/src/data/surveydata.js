import { getLanguage } from './strings';

const SURVEY_DATA = [
  [
    {
      en: 'Yes',
    },
    {
      en: 'No',
    },
  ],
  [
    {
      en: 'Yes',
    },
    {
      en: 'No',
    },
  ],
  [
    {
      en: 'Yes',
    },
    {
      en: 'No',
    },
  ],
  [
    {
      en: 'Yes',
    },
    {
      en: 'No',
    },
  ],
];

const QUESTION_DATA = [
  {
    en: 'Do you consume packaged, refined, synthetic foods?', // Diet
  },
  {
    en: 'Do you have a food sensitivity or allergy?', // GIS
  },
  {
    en: 'Do you suffer from sweating more than normal?', // Ans
  },
  {
    en: 'Do you grind your teeth during the day or while sleeping?', // Psy, Ans
  },
];

export function getSurveyQuestion(surveyNum) {
  return QUESTION_DATA[surveyNum][getLanguage()];
}

export function getSurvey(surveyNum, count) {
  return SURVEY_DATA[surveyNum][count][getLanguage()];
}

export function getSurveyLength(surveyNum) {
  return SURVEY_DATA[surveyNum].length;
}

export function getTotalQuestions() {
  return SURVEY_DATA.length;
}
