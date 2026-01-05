// Add these new nodes after supplier in the recordTypes array:

{
    id: 'location',
    name: 'RE Location',
    icon: 'Icons/Record Type.png',
    color: '#E6740A',
    source: 'Database',
    x: 900,
    y: 100,
    fields: [
        { name: 'id', type: 'Number (Integer)', isPrimary: true },
        { name: 'city', type: 'Text' },
        { name: 'state', type: 'Text' },
        { name: 'country', type: 'Text' },
        { name: 'zipCode', type: 'Text' }
    ]
},
{
    id: 'region',
    name: 'RE Region',
    icon: 'Icons/Record Type.png',
    color: '#E6740A',
    source: 'Database',
    x: 900,
    y: 550,
    fields: [
        { name: 'id', type: 'Number (Integer)', isPrimary: true },
        { name: 'name', type: 'Text' },
        { name: 'code', type: 'Text' },
        { name: 'managerId', type: 'Number (Integer)' }
    ]
},
{
    id: 'shipping',
    name: 'RE Shipping',
    icon: 'Icons/Record Type.png',
    color: '#E6740A',
    source: 'Database',
    x: 1300,
    y: 250,
    fields: [
        { name: 'id', type: 'Number (Integer)', isPrimary: true },
        { name: 'trackingNumber', type: 'Text' },
        { name: 'carrier', type: 'Text' },
        { name: 'status', type: 'Text' },
        { name: 'estimatedDelivery', type: 'Date' }
    ]
},
{
    id: 'warehouse',
    name: 'RE Warehouse',
    icon: 'Icons/Record Type.png',
    color: '#E6740A',
    source: 'Database',
    x: 1700,
    y: 100,
    fields: [
        { name: 'id', type: 'Number (Integer)', isPrimary: true },
        { name: 'name', type: 'Text' },
        { name: 'capacity', type: 'Number' },
        { name: 'locationId', type: 'Number (Integer)' }
    ]
}

// Add these new relationships after the existing ones:

{
    from: 'department',
    to: 'location',
    type: 'M-1',
    label: 'located at',
    color: '#9ca3af'
},
{
    from: 'customer',
    to: 'region',
    type: 'M-1',
    label: 'belongs to',
    color: '#9ca3af'
},
{
    from: 'order',
    to: 'shipping',
    type: '1-1',
    label: 'has',
    color: '#9ca3af'
},
{
    from: 'product',
    to: 'warehouse',
    type: 'M-1',
    label: 'stored in',
    color: '#9ca3af'
},
{
    from: 'warehouse',
    to: 'location',
    type: 'M-1',
    label: 'located at',
    color: '#9ca3af'
},
{
    from: 'region',
    to: 'employee',
    type: 'M-1',
    label: 'managed by',
    color: '#9ca3af'
}
