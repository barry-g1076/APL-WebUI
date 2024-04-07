import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
//   DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  //   DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo({ isOpen, onClose, title, children }) { 
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className={"bg-black"}>
        <div className="mx-auto w-full h-fit px-5 overflow-y-auto  ">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 w-full h-full">{children}</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={onClose}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
