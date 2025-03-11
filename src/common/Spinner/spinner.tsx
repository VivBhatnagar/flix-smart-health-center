import { JSX } from "react";

export default function Spinner(): JSX.Element {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }