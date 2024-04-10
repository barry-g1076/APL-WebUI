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

export function DrawerDemo({
  isOpen,
  onClose,
  title,
  children,
  doSumbit,
  runthis,
}) {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className={"bg-black"}>
        <div className="mx-auto w-3/4 h-fit px-5">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 w-full h-full">{children}</div>
          {doSumbit && (
            <div className="flex">
              <DrawerFooter className="flex-auto mr-0 pr-1">
                <DrawerClose asChild>
                  <Button onClick={runthis}>Sumbit</Button>
                </DrawerClose>
              </DrawerFooter>
              <DrawerFooter className="flex-auto ml-0 pl-1">
                <DrawerClose asChild>
                  <Button onClick={onClose}>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          )}
          {!doSumbit && (
            <DrawerFooter>
              <DrawerClose asChild>
                <Button onClick={onClose}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
