import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  trigger: ReactNode;
  children: ReactNode;
}

export const NJMenu = (props: Props) => {
  const { trigger, children } = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center">{trigger}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-1 w-[150px] origin-top-right divide-y divide-gray-100 rounded card-background border shadow-lg">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
