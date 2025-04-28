import { Toaster as SonnerToaster } from "sonner";

function Toaster() {
    return (
        <SonnerToaster
            position="top-right"
            toastOptions={{
                className: "border border-gray-800 bg-black/90 text-gray-200",
                duration: 3000,
                style: {
                    background: "rgba(0, 0, 0, 0.95)",
                    color: "#e4e4e7",
                    border: "1px solid #1f2937",
                },
                success: {
                    style: {
                        background: "rgba(0, 0, 0, 0.95)",
                        borderLeft: "4px solid #22c55e",
                    },
                },
                error: {
                    style: {
                        background: "rgba(0, 0, 0, 0.95)",
                        borderLeft: "4px solid #ef4444",
                    },
                },
                warning: {
                    style: {
                        background: "rgba(0, 0, 0, 0.95)",
                        borderLeft: "4px solid #f59e0b",
                    },
                },
                info: {
                    style: {
                        background: "rgba(0, 0, 0, 0.95)",
                        borderLeft: "4px solid #8b5cf6",
                    },
                },
            }}
        />
    );
}

export { Toaster };
