import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import theme from '../../theme';

/**
 * A button that highlights when selected and unhighlights when is deselected with callbacks for
 * selection and deselection. `children` is typically just text but can also be an icon or something
 * like that. Other types of children may appear weirdly since they will end up being a subcomponent
 * of a button.
 * @param key these buttons are often used in groups of many SelectableButtons, so these keys are
 * required for React to update the components efficiently.
 * @param selected whether this button should display selected or not. Managed by a prop so that a
 * parent component can take care of the selection logic (i.e. if only 1 SelectableButton can be 
 * selected at a time or if a max of 3 can be selected, etc.)
 * @param onSelect the callback that will happen when the button is clicked and is not selected
 * @param onDeselect the callback that will happen when the button is clicked and is already selected
 */
const SelectableButton = ({selected = false, onSelect, onDeselect, children}: {
  selected?: boolean,
  onSelect: VoidFunction,
  onDeselect: VoidFunction
  children: ReactNode
}) : JSX.Element => {
  return (
    <button
      style={Object.assign({},
        selected
          ? tw`rounded m-2 p-2 border-solid outline-none border-4 border-blue-600` 
          : tw`rounded m-2 p-2 border-none outline-none`,
        { backgroundColor: theme.PASTEL_BLUE })}
      onClick={() => {
        selected ? onDeselect() : onSelect();
      }}>
      {children}
    </button>
  );
}

export default SelectableButton;