"use client";

import React from "react";

interface QuickFactsProps {
  facts: string[];
}

const QuickFacts: React.FC<QuickFactsProps> = ({ facts }) => {
  return (
    <div className="quick-facts text-center">
      {facts.map((fact, index) => (
        <div
          key={index}
          className={`fact delay-${index + 1} fs-5 fst-italic`}
          style={{ animationDelay: `${0.6 * (index + 1)}s` }}
        >
          {fact}
        </div>
      ))}
    </div>
  );
};

export default QuickFacts;
