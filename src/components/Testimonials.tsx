import React, { FC } from "react";
import { v4 } from "uuid";

interface Props {
  testimonials: { quote: string; author: string }[];
}

const Testimonials: FC<Props> = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

export default Testimonials;
