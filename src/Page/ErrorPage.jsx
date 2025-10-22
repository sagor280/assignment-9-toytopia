import React from 'react';

const ErrorPage = () => {
    return (
       <div className="flex min-h-screen items-center justify-center `bg-gradient-to-br` from-primary/10 via-secondary/10 to-accent/10">
      <div className="text-center space-y-6 p-8">
        <div className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-4xl font-bold">Oops! Toy Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Looks like this toy wandered off the shelf! Let's get you back to our collection.
        </p>
        <button size="lg" className="mt-4 btn btn-primary">
         
          Back to Home
        </button>
      </div>
    </div>
    );
};

export default ErrorPage;