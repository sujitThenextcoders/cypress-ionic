import { CypressIonicReturn, SupportedSelectors } from '@interfaces';
import { IonSelect } from '@ionic/core/components/ion-select';
import { getFromSupportedSelector } from '@helpers';
import { IonSelectFunctions } from './ion-select-functions.abstract';

export class PopoverSelect extends IonSelectFunctions {
  constructor() {
    super(
      'ion-popover.hydrated ion-select-popover.hydrated ion-radio-group.hydrated',
      'ion-item'
    );
  }

  public selectByOptionText(
    selector: SupportedSelectors,
    optionText: string
  ): CypressIonicReturn<IonSelect> {
    return getFromSupportedSelector<IonSelect>(selector).then(($ionSelect) => {
      return this.getOptionButtonsContainer($ionSelect)
        .findByText(optionText)
        .parent()
        .click()
        .then(() => $ionSelect);
    });
  }

  selectByOptionIndex(
    selector: SupportedSelectors,
    optionIndex: number
  ): CypressIonicReturn<IonSelect> {
    return getFromSupportedSelector<IonSelect>(selector).then(($ionSelect) => {
      return this.clickOnWantedOption($ionSelect, optionIndex);
    });
  }
}
