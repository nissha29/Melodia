import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingButton = ({ isLoading, children }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`
        w-full px-4 py-2 
        bg-[#6B4C68] hover:bg-[#997095] 
        text-white rounded-md 
        transition-colors
        flex items-center justify-center
        disabled:opacity-70 disabled:cursor-not-allowed
        space-x-2
        font-playwrite
      `}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-8 w-8 animate-spin" />
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;