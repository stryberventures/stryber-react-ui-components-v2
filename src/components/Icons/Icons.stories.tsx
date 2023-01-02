import React from 'react';
import classNames from 'classnames';
import * as Icons from './index';
import pkg from './package.json';
import { createStyles } from '../Theme';
import Text from '../Text';
import { paymentMethodVariants as paymentMethodVariantsArr } from './IconsList/PaymentMethodIcon';
import { socialVariants as socialVariantsArr } from './IconsList/SocialIcon';
import toRem from '../../utils/toRem';


export default {
  title: 'Components/Icons',
  parameters: {
    pkg,
  },
};

const arrowVariants = ['down', 'up', 'left', 'right'];
const eyeVariants = ['open', 'closed'];
const countVariants = ['minus', 'plus'];
const loadVariants = ['download', 'upload'];
const moreVariants = ['vertical', 'horizontal'];
const singleVariants = ['default'];
const paymentMethodVariants = Object.keys(paymentMethodVariantsArr);
const socialVariants = Object.keys(socialVariantsArr(''));
const commonVariants = ['default', 'filled'];

const mapIconVariants = (Icon: React.FC<any>) => (variant: string) => ({
  variant,
  Icon,
});

const displayIcon = (name: keyof typeof Icons, Icon: React.FC<any>) => {
  if (name.includes('Arrow')) {
    return arrowVariants.map(mapIconVariants(Icon));
  }
  if (name == 'PaymentMethodIcon') {
    return paymentMethodVariants.map(mapIconVariants(Icon));
  }
  if (name == 'SocialIcon') {
    return socialVariants.map(mapIconVariants(Icon));
  }
  if (name === 'EyeIcon') {
    return eyeVariants.map(mapIconVariants(Icon));
  }
  if (name === 'CountIcon') {
    return countVariants.map(mapIconVariants(Icon));
  }
  if (name === 'LoadIcon') {
    return loadVariants.map(mapIconVariants(Icon));
  }
  if (name === 'MoreIcon') {
    return moreVariants.map(mapIconVariants(Icon));
  }
  if (name === 'CloseIcon') {
    return singleVariants.map(mapIconVariants(Icon));
  }
  if (name === 'SearchIcon') {
    return singleVariants.map(mapIconVariants(Icon));
  }
  return commonVariants.map(mapIconVariants(Icon));
};

export const AllIcons = () => {
  const classes = useStyles();
  const getIconsArr = () => {
    const iconsArr = [];
    for (const name in Icons) {
      iconsArr.push({ name: [name as keyof typeof Icons], Icon: Icons[name as keyof typeof Icons] });
    }
    return iconsArr.filter(({ name }) => !name[0].includes('Deprecated'));
  };
  return (
    <>
      <Text variant="h4" className={classes.title}>
        All Icons:
      </Text>
      <div className={classes.container}>
        {getIconsArr().map(({ name, Icon }, index) => {
          const iconName = name[0];
          return (
            <div
              key={index}
              className={classNames(
                classes.iconWrapper,
                {
                  [classes.payment]: (iconName as keyof typeof Icons) == 'PaymentMethodIcon',
                  [classes.social]: (iconName as keyof typeof Icons) == 'SocialIcon',
                }
              )}
            >
              <Text
                variant="components2"
                weight="semiBold"
                className={classes.subtitle}
              >{`<${name} />`} variants</Text>
              <div
                className={classNames(classes.iconVariantsWrapper, {
                  [classes.paymentVariantsWrapper]: (iconName as keyof typeof Icons) == 'PaymentMethodIcon',
                  [classes.socialVariantsWrapper]: (iconName as keyof typeof Icons) == 'SocialIcon',
                })}>
                {displayIcon(iconName as keyof typeof Icons, Icon)?.map(
                  ({ variant, Icon: IconVariant }, idx) => {
                    if ((iconName as keyof typeof Icons) == 'SocialIcon') {
                      return (
                        <div
                          key={variant + idx}
                          className={classes.twoColumnsGrid}
                        >
                          <div className={classes.socialIconVariant}>
                            <Text variant="body3">{variant} (</Text>
                            <div className={classes.textWrapper}>
                              <Text variant="body3" weight="semiBold">type</Text>
                              <Text variant="body3"> color)</Text>
                            </div>
                            <IconVariant variant={variant} />
                          </div>
                          <div className={classes.socialIconVariant}>
                            <Text variant="body3">{variant} (</Text>
                            <div className={classes.textWrapper}>
                              <Text variant="body3" weight="semiBold">type</Text>
                              <Text variant="body3"> plain)</Text>
                            </div>
                            <IconVariant variant={variant} type="plain" />
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={variant + idx}
                        className={classes.iconVariant}
                      >
                        <Text variant="body3">{variant}</Text>
                        <IconVariant variant={variant} />
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

function useStyles () {
  return createStyles(() => ({
    title: {
      marginBottom: toRem(24),
    },
    subtitle: {
      marginBottom: toRem(16),
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: toRem(20),
    },
    iconWrapper: {
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#9747FF',
      borderWidth: 1,
      borderStyle: 'dashed',
      padding: 20,
      gap: toRem(12),
    },
    payment: {
      gridRow: '9 / span 1',
      gridColumn: 'span 1',
    },
    social: {
      gridRow: '9 / span 1',
      gridColumn: 'span 2',
    },
    iconVariantsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexFlow: 'wrap',
      gap: toRem(12),
    },
    paymentVariantsWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    socialVariantsWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: `${toRem(12)} ${toRem(60)}`,
      width: '100%',
    },
    twoColumnsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      width: '100%',
    },
    socialIconVariant: {
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginLeft: toRem(12),
      }
    },
    iconVariant: {
      display: 'flex',
      alignItems: 'center',
      gap: toRem(6),
      '&:not(:last-child)': {
        marginRight: toRem(12),
      },
    },
    textWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: toRem(4),
    },
  }))();
}
