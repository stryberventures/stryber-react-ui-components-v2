import { createStyles } from '../../styles';

export default createStyles( (theme) => ({
  sliderWrap: {
    borderRadius: '12px',
    boxSizing: 'content-box',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    touchAction: 'none',
    color: 'rgb(144, 202, 249)',
    height: 4,
    width: '100%',
    padding: '13px 0px',
  },
  sliderRail: {
    position: 'absolute',
    borderRadius: 'inherit',
    opacity: 0.4,
    width: '100%',
    height: 'inherit',
    top: '50%',
  },
  sliderTrack: {
    position: 'absolute',
    borderRadius: 'inherit',
    height: 'inherit',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
    width: '50%',
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    boxSizing: 'border-box',
    borderRadius: '50%',
    top: '50%',
  },
  valueLabel: {
    position: 'absolute',
    zIndex: 1,
    color: '#fff',
    backgroundColor: '#757575',
    borderRadius: 2,
    top: 'calc(-100% - 10px)',
    padding: 5,
    transformOrigin: 'bottom center',
  },
  valueLabelCircle: {

  },
  valueLabelLabel: {

  },
}))
