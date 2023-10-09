import { QuestionDTO } from "./QuestionDTO";

export type QuestionListDTO = {
  junior: QuestionDTO[];
  middle: QuestionDTO[];
  senior: QuestionDTO[];
};
