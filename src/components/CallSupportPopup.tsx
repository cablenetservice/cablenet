import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const POPUP_SESSION_KEY = "callSupportPopupShown";
const POPUP_DELAY_MS = 5000;

const CallSupportPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(POPUP_SESSION_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-black dark:bg-white">
            <Phone className="h-7 w-7 text-white dark:text-black" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Internet or Cable Not Working?
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get instant help for slow internet, outages, setup issues, or cable problems.
          </DialogDescription>
        </DialogHeader>

        <Button
          asChild
          size="lg"
          className="w-full text-lg py-6 bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 font-semibold rounded-full"
        >
          <a href="tel:+18334574435" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            CALL SUPPORT NOW: (833) 457-4435
          </a>
        </Button>

        <p className="text-xs text-muted-foreground">
          Quick assistance • No forms • Talk to a real agent
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default CallSupportPopup;
