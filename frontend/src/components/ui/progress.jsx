import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({ className, value, indicatorClassName, ...props }) {
    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full bg-gray-700", className)}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={cn("bg-primary h-full w-full flex-1 transition-all", indicatorClassName || "bg-gradient-to-r from-blue-500 to-indigo-500")}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
