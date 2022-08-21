import { Fragment } from 'react';
import LabelItem from './LabelItem';
import Title from '../UI/Title';
import InputForm from '../UI/InputForm';

const DUMMY_ITEMS = ['fun', 'uncategorized'];

const Labels = () => {
  return (
    <div>
      <Title>Labels</Title>
      <InputForm
        type="text"
        id="add-label"
        placeholder="add custom label and press enter"
      />
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <LabelItem key={item} title={item} />
        ))}
      </ul>
    </div>
  );
};

export default Labels;
