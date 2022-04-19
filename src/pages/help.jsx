import { Fragment } from "react";
import HelpHero from "../components/help/HelpHero";
import QuestionsAndAnswers from "../components/help/QuestionAndAnswer";

export default function HelpPage() {
  return (
    <Fragment>
      <HelpHero />
      <QuestionsAndAnswers />
    </Fragment>
  );
}
