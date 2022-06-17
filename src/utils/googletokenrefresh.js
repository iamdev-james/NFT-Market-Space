export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

    // Save the just generated token 
    console.log('Hey, here is the new token: ', newAuthRes.id_token);

    // Setup another timer once the first one elapses
    setTimeout(refreshToken, refreshTiming);
  };

  // Set the first timer
  setTimeout(refreshToken, refreshTiming);
};
