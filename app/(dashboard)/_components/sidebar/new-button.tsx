"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organisation"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-nonemax-w-[480px]">
        <DialogTitle className="sr-only">Create New Organization</DialogTitle>
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
