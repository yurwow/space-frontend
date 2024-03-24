import { Stack } from '@mui/material';
import classNames from './SigninPage.module.css';
import { BaseButton } from '@/shared/ui/Button/Button.tsx';

const SigninPage = () => {
  console.log(1);

  return (
    <Stack className={classNames.SigninPage} p={4}>
      <BaseButton variant="contained">click me!</BaseButton>
    </Stack>
  );
};

export default SigninPage;
