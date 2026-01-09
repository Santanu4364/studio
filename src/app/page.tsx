import { BirthdayMessageGenerator } from '@/components/birthday-message-generator';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground overflow-hidden p-4">
      <div className="absolute inset-0 z-0">
        <Icons.mandala className="w-full h-full object-cover opacity-5 dark:opacity-[0.02]" />
      </div>
      <div className="z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 md:gap-6 mb-4">
          <Icons.diya className="w-10 h-10 md:w-14 md:h-14 text-accent" />
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary-foreground bg-primary px-4 py-2 rounded-lg shadow-md -skew-y-2">
            Subh Janamdin
          </h1>
          <Icons.diya className="w-10 h-10 md:w-14 md:h-14 text-accent" />
        </div>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-body">
          Create a personalized, inspiring birthday message for a special student. Let's make their day unforgettable! ✨
        </p>
        <BirthdayMessageGenerator />
      </div>
    </main>
  );
}
