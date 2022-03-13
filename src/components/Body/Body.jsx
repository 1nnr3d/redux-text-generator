/* Style File */
import styles from './style.module.css';

/* Components */
import Form from '../Form/Form';

/* Libraries */
import { useSelector } from 'react-redux';

export default function Body() {
  const text = useSelector(state => state.generator.text); // text selector
  const htmlInc = useSelector(state => state.generator.htmlInc); // html include selector

  return (
    <div className={styles.container}>
      <Form />
      <br />
      <div className={styles.text}>
        {
          htmlInc === "text"
            ? text.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))
            : text.map((paragraph, i) => (
              <p key={i}>
                {`<p>${paragraph}</p>`}
              </p>
            ))
        }
      </div>
    </div>
  )
}
