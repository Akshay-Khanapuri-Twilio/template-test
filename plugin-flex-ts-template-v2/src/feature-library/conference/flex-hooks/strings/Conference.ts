// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  ExternalTransferFailedHangupNotification = 'PSConferenceFailedHangupNotification',
  ExternalWarmTransferInvalidPhoneNumber = 'PSExternalWarmTransferInvalidPhoneNumber',
}

export const stringHook = () => ({
  [StringTemplates.ExternalTransferFailedHangupNotification]:
    'Hangup call abandoned: Failed to take all participants off hold while hanging up the call. If this issue persists, please try unholding participants manually before leaving the call',
  [StringTemplates.ExternalWarmTransferInvalidPhoneNumber]: 'Unable to add participant. {{message}}',
});
