import { CheckboxIndicator } from '@radix-ui/react-checkbox';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className='h-screen w-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-300'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-3'>
          Reactor
        </Heading>

        <Text size='lg' className='mt-3'>
          Sign in to continue
        </Text>
      </header>

      <form action="" className='flex flex-col gap-6 items-stretch w-full max-w-[400px] mt-8'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-medium'>Email</Text>
          <TextInput.Root>
            <TextInput.Input id='email' type="email"/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-medium'>Password</Text>
          <TextInput.Root>
            <TextInput.Input id="password" type="password"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember"/>
          <Text>Keep me signed in for 30 days</Text>
        </label>

        <Button>
          Sign In
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
        <a href="#" className='underline hover:text-neutral-50'>Forgot your password?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="#" className='underline hover:text-neutral-50'>Don’t have an account? Create one now.</a>
        </Text>
      </footer>
    </div>
  );
}
