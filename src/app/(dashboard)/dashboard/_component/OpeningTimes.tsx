"use client";

import React from "react";

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

const date = z.object({
  active: z.boolean(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

const formSchema = z.object({
  sunday: date.optional(),
  monday: date.optional(),
  tuesday: date.optional(),
  wednesday: date.optional(),
  thursday: date.optional(),
  friday: date.optional(),
  saturday: date.optional(),
  toDate: z.date().optional(),
});

const OpeningTimes = () => {
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
    startTime: "6:00",
    endTime: "22:00",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sunday: defaultDayValue,
      monday: defaultDayValue,
      tuesday: defaultDayValue,
      wednesday: defaultDayValue,
      thursday: defaultDayValue,
      friday: defaultDayValue,
      saturday: defaultDayValue,
    },
  });

  function submit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <p className="cursor-pointer">Change Opening/Closing Times</p>
      </DialogTrigger>
      <DialogContent className="min-w-[100%] md:min-w-[1000px] ">
        <DialogHeader className="mb-10">
          <DialogTitle>Opening and Closing Times</DialogTitle>
          <DialogDescription>
            Make changes to your weekly opening and closing times here. Click
            save when you're done.
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
                        <div className="flex w-[10%] items-center gap-2">
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
                                name={`${day}.startTime`}
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
                                name={`${day}.endTime`}
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
            <div className="pt-10">
              <Button type="submit" className=" text-white">
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OpeningTimes;
