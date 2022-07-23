import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatThunk } from '../../redux/Actions/catAction';
import Cat from './Cat';
import styles from './style.module.css';

function CatList() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.cat);

  return (
    <div>
      <Cat url={res.url} />
      <button
        className={styles.catButt}
        type="button"
        onClick={() => dispatch(getCatThunk())}
      >
        Посмотреть на кота
      </button>
    </div>
  );
}

export default CatList;
