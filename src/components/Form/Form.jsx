/* eslint-disable react-hooks/exhaustive-deps */

/* Style File */
import styles from './style.module.css';

/* Libraries */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

/* Redux Files */
import { getParagraph } from '../../app/services'; // Services File
import { changeType } from '../../app/generatorSlice'; // Generator Slice File

export default function Form() {
  const dispatch = useDispatch();

  const [paras, setParas] = useState(4); // Parameters State Variable
  const [htmlInc, setHtmlInc] = useState("text"); // "HTML Include" State Variable

  useEffect(() => {
    if (paras < 1) {
      alert("The number of paragraphs can be at least 1!");
      setParas(1);
    }
  }, [paras]);

  const paragraphUpdate = async () => {
    await dispatch(getParagraph(paras));
    dispatch(changeType(htmlInc))
  };

  useEffect(() => {
    paragraphUpdate();
  }, [paras, htmlInc]);

  return (
    <div className={styles.form}>
      <div className={styles.inputBox}>
        <label htmlFor="paragraphs">Paragraphs</label>
        <input type="number" id="paragraphs" name="paragraphs" min="1" className={styles.input}
          value={paras}
          onChange={(e) => setParas(Number(e.target.value))} /> {/* Set Parameters Number */}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="htmlInclude">Include HTML</label>
        <select name="htmlInclude" id="htmlInclude" className={styles.select}
          value={htmlInc}
          onChange={(e) => setHtmlInc(e.target.value)}> {/* Set HTML Include */}
          <option defaultValue value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </div>
    </div>
  )
}
