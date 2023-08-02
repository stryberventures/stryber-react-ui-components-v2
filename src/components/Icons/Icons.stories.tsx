import React from 'react';
import classNames from 'classnames';
import { ComponentStory } from '@storybook/react';
import * as Icons from './index';
import pkg from './package.json';
import { createStyles, toRem } from '../Theme';
import Text from '../Text';
import {
  paymentMethodVariants as paymentMethodVariantsArr,
  TPaymentMethodVariants,
} from './IconsList/PaymentMethodIcon';
import {
  socialVariants as socialVariantsArr,
  TSocialVariants,
} from './IconsList/SocialIcon';
import {
  IArrowIconVariant,
  TCursorVariants,
  TMoreVariants,
  TSingleVariants,
} from './types';
import { IEyeIconVariant } from './IconsList/EyeIcon';
import { TCountIconVariants } from './IconsList/CountIcon';
import { TLoadIconVariants } from './IconsList/LoadIcon';

export default {
  title: 'Components/Icons',
  parameters: {
    pkg,
  },
  args: {
    fill: undefined,
    width: 40,
    height: 40,
  },
};

const arrowVariants: IArrowIconVariant[] = ['down', 'up', 'left', 'right'];
const eyeVariants: IEyeIconVariant[] = ['open', 'closed'];
const countVariants: TCountIconVariants[] = ['minus', 'plus'];
const loadVariants: TLoadIconVariants[] = ['download', 'upload'];
const moreVariants: TMoreVariants[] = ['vertical', 'horizontal'];
const singleVariants: TSingleVariants[] = ['default'];
const paymentMethodVariants = Object.keys(
  paymentMethodVariantsArr
) as TPaymentMethodVariants[];
const socialVariants = Object.keys(socialVariantsArr) as TSocialVariants[];
const commonVariants = ['default', 'filled'];
const cursorVariants: TCursorVariants[] = ['arrow', 'drag', 'hover'];

const TemplateSocial: ComponentStory<typeof Icons.SocialIcon> = (args) => {
  const classes = useStyles();
  return (
    <div className={classes.socialIconsWrapper}>
      {socialVariants.map((variant: TSocialVariants) => {
        return (
          <Icons.SocialIcon
            {...args}
            key={variant}
            variant={variant}
            className={classes.pointer}
          />
        );
      })}
    </div>
  );
};

export const SocialMediaIcons = TemplateSocial.bind({});
SocialMediaIcons.args = {
  fill: '#475467',
};

export const AllIcons = () => {
  const classes = useStyles();
  const getIconsArr = () => {
    const iconsArr = [];
    for (const name in Icons) {
      iconsArr.push({
        name: [name as keyof typeof Icons],
        Icon: Icons[name as keyof typeof Icons],
      });
    }
    return iconsArr.filter(({ name }) => !name[0].includes('Deprecated'));
  };
  return (
    <>
      <Text variant="h4" className={classes.allIconsTitle}>
        All Icons:
      </Text>
      <div className={classes.allIconsContainer}>
        {getIconsArr().map(({ name, Icon }, index) => {
          const iconName = name[0];
          return (
            <div
              key={index}
              className={classNames(classes.iconWrapper, {
                [classes.span2Rows]:
                  (iconName as keyof typeof Icons) == 'PaymentMethodIcon' ||
                  (iconName as keyof typeof Icons) == 'SocialIcon',
              })}
            >
              <Text
                variant="components2"
                weight="semiBold"
                className={classes.subtitle}
              >
                {`<${name} />`} variants
              </Text>
              <div
                className={classNames(classes.iconVariantsWrapper, {
                  [classes.paymentVariantsWrapper]:
                    (iconName as keyof typeof Icons) == 'PaymentMethodIcon',
                  [classes.socialVariantsWrapper]:
                    (iconName as keyof typeof Icons) == 'SocialIcon',
                })}
              >
                {displayIcon(iconName as keyof typeof Icons, Icon)?.map(
                  ({ variant, Icon: IconVariant }, idx) => {
                    return (
                      <div key={variant + idx} className={classes.iconVariant}>
                        <IconVariant
                          variant={variant}
                          className={classNames({
                            [classes.icon20]:
                              (iconName as keyof typeof Icons) !=
                              'PaymentMethodIcon',
                          })}
                        />
                        <Text variant="body3">{variant}</Text>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const PaymentMethodIcons = () => {
  const classes = useStyles();
  return (
    <>
      <Text variant="h4" className={classes.title}>
        Payment Methods
      </Text>
      <div className={classes.container}>
        {paymentMethodVariants.map((variant: TPaymentMethodVariants) => {
          return (
            <div key={variant} className={classes.iconContainer}>
              <Icons.PaymentMethodIcon
                variant={variant}
                className={classes.pointer}
                width={54}
                height={44}
              />
              <Text variant="body3" className={classes.text}>
                {variant}
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};

function displayIcon(name: keyof typeof Icons, Icon: React.FC<any>) {
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
  if (name === 'CursorIcon') {
    return cursorVariants.map(mapIconVariants(Icon));
  }
  if (name === 'SearchIcon') {
    return singleVariants.map(mapIconVariants(Icon));
  }
  return commonVariants.map(mapIconVariants(Icon));
}

function mapIconVariants(Icon: React.FC<any>) {
  return (variant: string) => ({
    variant,
    Icon,
  });
}

function useStyles() {
  return createStyles((theme) => ({
    allIconsTitle: {
      marginBottom: theme.spacing[24],
    },
    subtitle: {
      marginBottom: theme.spacing[16],
    },
    allIconsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: toRem(20),
    },
    socialIconsWrapper: {
      display: 'flex',
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
    iconVariantsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexFlow: 'wrap',
      gap: toRem(12),
    },
    span2Rows: {
      gridRow: '10 / span 2',
    },
    paymentVariantsWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    socialVariantsWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: `${toRem(12)} ${toRem(32)}`,
      width: '100%',
    },
    socialIconVariant: {
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginLeft: toRem(12),
      },
    },
    iconVariant: {
      display: 'flex',
      alignItems: 'center',
      gap: toRem(6),
      '&:not(:last-child)': {
        marginRight: toRem(12),
      },
    },
    icon20: {
      width: 20,
      height: 20,
    },
    coloredIcon: {
      width: 100,
      height: 100,
      cursor: 'pointer',
      '& path': {
        fill: theme.colors.primary.medium400,
        transition: 'fill .3s',
      },
      '&:hover path': {
        fill: theme.colors.primary.dark600,
      },
    },
    // social media and payment styles
    title: {
      marginBottom: theme.spacing[24],
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 150px)',
      width: 720,
      gap: toRem(40),
      padding: 20,
      borderRadius: 10,
    },
    withBackground: {
      backgroundColor: theme.colors.neutralGray.medium300,
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: toRem(16),
      marginBottom: theme.spacing[16],
    },
    text: {
      textTransform: 'capitalize',
    },
    pointer: {
      pointer: 'cursor',
    },
    socialIcon: {
      '& path': {
        fill: theme.colors.primary.medium300,
        transition: 'fill .3s',
      },
      '&:hover path': {
        fill: theme.colors.primary.dark600,
      },
    },
    youtube: {
      '& path:first-child': {
        fill: theme.colors.primary.medium300,
        transition: 'fill .3s',
      },
      '&:hover path:first-child': {
        fill: theme.colors.primary.dark600,
      },
    },
  }))();
}
