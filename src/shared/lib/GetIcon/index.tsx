import {
  Search,
  CheckLg,
  PlusLg,
  Download,
  Filter,
  PencilFill,
  ArrowBarLeft,
  House,
  Check2Circle,
  Check2Square,
  Person,
  People,
  HouseDoor,
  Layers,
  Building,
  CloudDownload,
  Globe2,
  Flag,
  BrightnessHigh,
  InfoCircle,
  Dash,
  PersonFill,
} from 'react-bootstrap-icons';

import { TIcon } from 'shared/lib';

type Props = {
  /** ClassName for icon. */
  className?: string;
  /** Width property for svg tag. */
  width: string;
  /** Height property for svg tag. */
  height: string;
  /** Get icon by name: "search" */
  name: TIcon;
};

export const GetIcon = ({ className, width, height, name }: Props) => {
  return (
    <>
      {name === 'search' && (
        <Search className={className} width={width} height={height} />
      )}
      {name === 'check' && (
        <CheckLg className={className} width={width} height={height} />
      )}
      {name === 'plus' && (
        <PlusLg className={className} width={width} height={height} />
      )}
      {name === 'download' && (
        <Download className={className} width={width} height={height} />
      )}
      {name === 'filter' && (
        <Filter className={className} width={width} height={height} />
      )}
      {name === 'pencil-fill' && (
        <PencilFill className={className} width={width} height={height} />
      )}
      {name === 'arrow-bar-left' && (
        <ArrowBarLeft className={className} width={width} height={height} />
      )}
      {name === 'house' && (
        <House className={className} width={width} height={height} />
      )}
      {name === 'check2-circle' && (
        <Check2Circle className={className} width={width} height={height} />
      )}
      {name === 'check2-square' && (
        <Check2Square className={className} width={width} height={height} />
      )}
      {name === 'person' && (
        <Person className={className} width={width} height={height} />
      )}
      {name === 'people' && (
        <People className={className} width={width} height={height} />
      )}
      {name === 'house-door' && (
        <HouseDoor className={className} width={width} height={height} />
      )}
      {name === 'layers' && (
        <Layers className={className} width={width} height={height} />
      )}
      {name === 'building' && (
        <Building className={className} width={width} height={height} />
      )}
      {name === 'cloud-download' && (
        <CloudDownload className={className} width={width} height={height} />
      )}
      {name === 'globe2' && (
        <Globe2 className={className} width={width} height={height} />
      )}
      {name === 'flag' && (
        <Flag className={className} width={width} height={height} />
      )}
      {name === 'brightness-high' && (
        <BrightnessHigh className={className} width={width} height={height} />
      )}
      {name === 'info-circle' && (
        <InfoCircle className={className} width={width} height={height} />
      )}
      {name === 'dash' && (
        <Dash className={className} width={width} height={height} />
      )}
      {name === 'person-fill' && (
        <PersonFill className={className} width={width} height={height} />
      )}
    </>
  );
};
