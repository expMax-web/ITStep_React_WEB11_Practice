import React from "react";

import styles from "./Article.module.css";

interface ArticleProps {
  title: string;
  subtitle: string;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <article className={styles.ArticleContainer}>
      <h1 className={styles.ArticleTitle}>{title}</h1>
      <p className={styles.ArticleSubTitle}>{subtitle}</p>
      <p className={styles.ArticleText}>{children}</p>
    </article>
  );
};
