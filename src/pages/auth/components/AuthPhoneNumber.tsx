import { ChangeEvent } from 'react';
import React, { FC, useState } from '../../../lib/teact';
import { withGlobal } from '../../../lib/teactn';

import { GlobalState, GlobalActions } from '../../../store/types';
import countryList from '../../../../public/countries.json';
import formatPhoneNumber from '../../../util/formatPhoneNumber';

import Button from '../../../components/ui/Button';
import InputText from '../../../components/ui/InputText';
import CountryCodeInput from '../../../components/ui/CountryCodeInput';
import Checkbox from '../../../components/ui/Checkbox';

import './Auth.scss';

type IProps = Pick<GlobalState, 'authIsLoading' | 'authError' | 'authShouldRememberMe'> &
Pick<GlobalActions, 'setAuthPhoneNumber' | 'setAuthRememberMe'>;

const AuthPhoneNumber: FC<IProps> = ({
  authIsLoading, authError, authShouldRememberMe, setAuthPhoneNumber, setAuthRememberMe,
}) => {
  const currentCountry = countryList.find((c) => c.id === 'RU');

  const [isButtonShown, setIsButtonShown] = useState(false);
  const [country, setCountry] = useState(currentCountry);
  const [code, setCode] = useState(currentCountry ? currentCountry.code : undefined);
  const [phone, setPhone] = useState('');

  function onCodeChange(newCountry: Country) {
    setCode(newCountry.code);
    setCountry(newCountry);
  }

  function onPhoneNumberChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    const phoneNumber = formatPhoneNumber(target.value, country);

    setPhone(phoneNumber);
    target.value = `${code} ${phoneNumber}`;
    setIsButtonShown(target.value.replace(/[^\d]+/g, '').length >= 11);
  }

  function onKeepSessionChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setAuthRememberMe(target.checked);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (authIsLoading) {
      return;
    }

    const phoneNumber = `${code} ${phone}`;
    setAuthPhoneNumber({ phoneNumber });
  }

  return (
    <div id="auth-phone-number-form" className="auth-form">
      <div id="logo" />
      <h2>Sign in to Telegram</h2>
      <p className="note">
        Please confirm your country and
        <br />enter your phone number.
      </p>
      <form action="" method="post" onSubmit={handleSubmit}>
        <CountryCodeInput
          id="sign-in-phone-code"
          value={country}
          onChange={onCodeChange}
        />
        <InputText
          id="sign-in-phone-number"
          label="Phone Number"
          onChange={onPhoneNumberChange}
          value={`${code} ${phone}`}
          error={authError}
        />
        <Checkbox
          id="sign-in-keep-session"
          label="Keep me signed in"
          checked={Boolean(authShouldRememberMe)}
          onChange={onKeepSessionChange}
        />
        {isButtonShown && (
          <Button type="submit" isLoading={authIsLoading}>Next</Button>
        )}
      </form>
    </div>
  );
};

export default withGlobal(
  (global) => {
    const { authIsLoading, authError, authShouldRememberMe } = global;
    return { authIsLoading, authError, authShouldRememberMe };
  },
  (setGlobal, actions) => {
    const { setAuthPhoneNumber, setAuthRememberMe } = actions;
    return { setAuthPhoneNumber, setAuthRememberMe };
  },
)(AuthPhoneNumber);
