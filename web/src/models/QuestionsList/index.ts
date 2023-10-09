import { createDomain, sample } from "effector";
import { QuestionListDTO } from "../../types";
import { createGate } from "effector-react";
import { questionsList } from "../../__fixtures__/questionsList";

export const domain = createDomain("questionsListDomain");

export const $questionsList = domain.createStore<QuestionListDTO | null>(null, {
  sid: "questionsList",
});

export const QuestionListGate = createGate("QuestionListGate");

export const questionsListChangedFX = domain.createEffect<
  { id: number },
  QuestionListDTO,
  Error
>();

sample({
  clock: [QuestionListGate.open, QuestionListGate.state],
  fn() {
    return { id: 1 };
  },
  target: questionsListChangedFX,
});

questionsListChangedFX.use(() => {
  return questionsList;
});

sample({
  clock: questionsListChangedFX.doneData,
  target: $questionsList,
});

$questionsList.reset(QuestionListGate.close);
