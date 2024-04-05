"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  addDays,
  format,
  add,
  formatDate,
  eachDayOfInterval,
  sub,
} from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CalendarDays, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import TimeSelector from "@/components/timeselector";
import { Switch } from "@/components/ui/switch";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

const date = z.object({
  active: z.boolean(),
  openingTime: z.string(),
  closingTime: z.string(),
});

const formSchema = z.object({
  sunday: date.optional(),
  monday: date.optional(),
  tuesday: date.optional(),
  wednesday: date.optional(),
  thursday: date.optional(),
  friday: date.optional(),
  saturday: date.optional(),
  toDate: z.date({
    required_error:
      "Please select which date to these times will be updated to.",
  }),
});

import type { ScheduleDay } from "@prisma/client";
import getSlots from "@/lib/getSlots";

interface OpeningTimesProps {
  scheduledDays: ScheduleDay[];
}

const OpeningTimes = ({ scheduledDays }: OpeningTimesProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const defaultDayValue = {
    active: false,
    openingTime: "9:00",
    closingTime: "17:00",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sunday: scheduledDays[0] || defaultDayValue,
      monday: scheduledDays[1] || defaultDayValue,
      tuesday: scheduledDays[2] || defaultDayValue,
      wednesday: scheduledDays[3] || defaultDayValue,
      thursday: scheduledDays[4] || defaultDayValue,
      friday: scheduledDays[5] || defaultDayValue,
      saturday: scheduledDays[6] || defaultDayValue,
    },
  });

  function submit(values: z.infer<typeof formSchema>) {
    if (!values) {
      toast.error("No values are selected.");
      return;
    }

    // const length = 90;
    // const interval = 20;
    // const slots = getSlots(
    //   new Date(),
    //   values.wednesday?.openingTime!,
    //   values.wednesday?.closingTime!,
    //   interval,
    //   length,
    //   [
    //     {
    //       openingTime: new Date(
    //         new Date().getFullYear(),
    //         new Date().getMonth(),
    //         new Date().getDate(),
    //         7,
    //         30,
    //       ),
    //       closingTime: new Date(
    //         new Date().getFullYear(),
    //         new Date().getMonth(),
    //         new Date().getDate(),
    //         9,
    //         30,
    //       ),
    //     },
    //   ],
    // );
    // console.log(slots);

    const days = [
      values.sunday,
      values.monday,
      values.tuesday,
      values.wednesday,
      values.thursday,
      values.friday,
      values.saturday,
    ];

    let validValues = true;
    days.forEach((day) => {
      //How to get the date values from STARTING and ENDING Date
      let startingDate = new Date(
        2000,
        0,
        1,
        parseInt(day?.openingTime?.split(":")[0]!),
        parseInt(day?.openingTime?.split(":")[1]!),
      );
      const endingDate = new Date(
        2000,
        0,
        1,
        parseInt(day?.closingTime?.split(":")[0]!),
        parseInt(day?.closingTime?.split(":")[1]!),
      );

      if (startingDate >= endingDate) {
        toast.error("The ending day should be AFTER the starting date.");
        validValues = false;
        return;
      }
    });

    if (!validValues) {
      return;
    }

    setLoading(true);

    axios
      .post("/api/openingtimes", {
        days,
        toDate: values.toDate,
      })
      .then(() => {
        toast.success("Updated opening/closing times");
      })
      .catch((e) => {
        toast.error("Something went wrong.");
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <p className="cursor-pointer">Change Opening/Closing Times</p>
      </DialogTrigger>
      <DialogContent className="min-w-[100%] md:min-w-[1000px] ">
        <DialogHeader className="mb-8">
          <DialogTitle>Opening and Closing Times</DialogTitle>
          <DialogDescription>
            Make changes to your weekly opening and closing times here. Click
            save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-4 ">
            {days.map((day) => (
              <FormField
                key={day}
                control={form.control}
                // @ts-ignore comment
                name={`${day}.active`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-12">
                        <div className="flex w-[15%] items-center gap-2">
                          <Switch
                            // @ts-ignore comment
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <FormLabel className="capitalize">{day}</FormLabel>
                        </div>
                        {field.value && (
                          <div className="flex items-center gap-4">
                            <div>
                              <FormField
                                control={form.control}
                                // @ts-ignore comment
                                name={`${day}.openingTime`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <TimeSelector
                                        type="openTime"
                                        changeTime={field.onChange}
                                        // @ts-ignore comment
                                        selected={field.value}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                // @ts-ignore comment
                                name={`${day}.closingTime`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <TimeSelector
                                        type="closeTime"
                                        changeTime={field.onChange}
                                        // @ts-ignore comment
                                        selected={field.value}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="toDate"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-8">
                  <FormLabel>Updated to: (1 day min.)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < addDays(new Date(), 1)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-10">
              <Button
                type="submit"
                disabled={loading}
                className=" flex items-center gap-2 text-white"
              >
                Save changes
                {loading && <Loader2 className="animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OpeningTimes;
