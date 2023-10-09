import { createDomain } from "effector";
import { QuestionDTO } from "../../types";

export const domain = createDomain("selectedQuestionsDomain");

export const $selectedQuestions = domain.createStore<QuestionDTO[] | null>(
  null,
  { sid: "selectedQuestions" }
);

export const setSelectedQuestions = domain.createEvent<QuestionDTO[]>();
