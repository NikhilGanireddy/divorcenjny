"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import {cn} from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({className, ...props}, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b ", className)} {...props} />))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({className, children, ...props}, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn("font-semibold flex flex-1 items-center justify-between py-4 text-sm lg:text-base transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className)}
            {...props}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"
                 className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>


        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({className, children, ...props}, ref) => (<AccordionPrimitive.Content
    ref={ref}
    className=" overflow-hidden text-xs lg:text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
</AccordionPrimitive.Content>))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}