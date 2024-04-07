import { IoMdCheckmark } from 'react-icons/io';

export interface StepperData {
  step: string;
  checked: boolean;
}
export default function Stepper(props: { stepData: StepperData[] }) {
  const { stepData } = props;
  return (
    <div>
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 justify-around border border-blue-500 rounded-xl sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {stepData.map((item, index) => (
          <li
            key={index}
            className={`flex items-center ${item.checked ? 'text-blue-600' : 'text-black'}`}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${item.checked ? 'border-blue-600' : 'border-black'} rounded-full shrink-0`}
            >
              {item.checked ? <IoMdCheckmark /> : index + 1}
            </span>
            <span
              className={`${index !== 0 && stepData[index - 1].checked ? 'text-blue-600' : index === 0 ? 'text-blue-600' : 'text-black'} hidden sm:inline-flex sm:ms-2`}
            >
              {item.step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
