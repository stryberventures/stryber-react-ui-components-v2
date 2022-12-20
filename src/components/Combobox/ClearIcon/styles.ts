import { createStyles } from '../../Theme'

export default createStyles((theme) => ({
  clearIcon: {
    backgroundColor: theme.colors.neutralGray.main500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
    padding: 6.5,
  },
}), { internalUsage: true })
