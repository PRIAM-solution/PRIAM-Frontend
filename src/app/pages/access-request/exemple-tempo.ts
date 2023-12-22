import { DataType } from '../../interfaces/data-list';
import { Processing } from '../../interfaces/data-list-purpose';
import { SecondaryActor } from '../../interfaces/data-list-transfer';
export const DATA_LIST: DataType[] = [
  {
    dataTypeName: 'Commands',
    data: [
      { dataId: 0, dataName: 'Command Number', dataValue: ['143', '192', '205'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Command Number', isPrimaryKey: true },
      { dataId: 1, dataName: 'Quantity', dataValue: ['10', '90', '50'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Quantity', isPrimaryKey: false },
      { dataId: 2, dataName: 'Date', dataValue: ['10/10', '29/01', '15/05'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Date', isPrimaryKey: false },
    ],
  },
  {
    dataTypeName: 'Clients',
    data: [
      { dataId: 3, dataName: 'Name', dataValue: ['Bob', 'Max', 'Joe', 'Alice'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Name', isPrimaryKey: true },
      { dataId: 4, dataName: 'Age', dataValue: ['20', '85', '43', '30'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Age', isPrimaryKey: false },
      { dataId: 5, dataName: 'Genre', dataValue: ['Homme', 'Homme', 'Homme', 'Femme'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category1', source: 'Indirect', sourceDetails: 'Genre', isPrimaryKey: false },
    ],
  },
  {
    dataTypeName: 'Products',
    data: [
      { dataId: 6, dataName: 'Product Name', dataValue: ['Laptop', 'Smartphone', 'Tablet'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category2', source: 'Direct', sourceDetails: 'Product Name', isPrimaryKey: false },
      { dataId: 7, dataName: 'Price', dataValue: ['1200', '800', '500'], dataConservationDuration: '2023-01-01', personalDataCategory: 'Category2', source: 'Direct', sourceDetails: 'Price', isPrimaryKey: true },
    ],
  },
];

export const DATA_LIST_PURPOSE: Processing[] = [
  {
    processingName: 'Process1',
    purposes: [
      { purposeDescription: 'Purpose1' },
      { purposeDescription: 'Purpose2' },
    ],
    data: [
      { dataName: 'Attribute1' },
      { dataName: 'Attribute2' },
    ],
  },
  {
    processingName: 'Process2',
    purposes: [
      { purposeDescription: 'Purpose3' },
      { purposeDescription: 'Purpose4' },
    ],
    data: [
      { dataName: 'Attribute3' },
    ],
  },
  {
    processingName: 'Process3',
    purposes: [
      { purposeDescription: 'Purpose1' },
      { purposeDescription: 'Purpose2' },
      { purposeDescription: 'Purpose2' },
    ],
    data: [
      { dataName: 'Attribute1' },
      { dataName: 'Attribute2' },
    ],
  },
  {
    processingName: 'Process4',
    purposes: [
      { purposeDescription: 'Purpose1' },
    ],
    data: [
      { dataName: 'Attribute1' },
      { dataName: 'Attribute2' },
      { dataName: 'Attribute2' },
      { dataName: 'Attribute2' },
    ],
  },
];

export const DATA_LIST_TRANSFER: SecondaryActor[] = [
  {
    secondaryActorName: 'Actor1',
    secondaryActorCategory: 'Category1',
    country: 'Country1',
    data: [
      { dataName: 'Attribute1' },
      { dataName: 'Attribute2' },
    ],
  },
  {
    secondaryActorName: 'Actor2',
    secondaryActorCategory: 'Category2',
    country: 'France',
    data: [
      { dataName: 'Attribute3' },
      { dataName: 'Attribute4' },
      { dataName: 'Attribute5' },
    ],
  },
  {
    secondaryActorName: 'Actor3',
    secondaryActorCategory: 'Category3',
    country: 'Country3',
    data: [
      { dataName: 'Attribute6' },
      { dataName: 'Attribute7' },
      { dataName: 'Attribute8' },
    ],
  },
];
