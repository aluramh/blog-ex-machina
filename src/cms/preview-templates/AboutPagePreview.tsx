import React, { FC } from "react";
import { AboutPageTemplate } from "../../templates/about-page";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

const AboutPagePreview: FC<PreviewTemplateComponentProps> = ({
  entry,
  widgetFor,
}) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;
