import { SORTING_OPTIONS } from '../../../../constants';
import { Option } from './components/option';

export const SortingForm = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
                  Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {SORTING_OPTIONS.map(({ title, isActive })=> <Option key={title} title={title} isActive={isActive} />)}
    </ul>
  </form>
);
