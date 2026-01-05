# Appian ERD Visualizer

An interactive Entity Relationship Diagram (ERD) visualizer built with vanilla JavaScript, featuring smooth D3-style curved connectors and a clean, modern interface.

## Features

- **Interactive Visualization**: Pan, zoom, and drag nodes to arrange your ERD
- **Smooth Curved Connectors**: D3.js-style Bezier curves for elegant relationship lines
- **Two View Modes**: 
  - Compact: Shows only entity names
  - Detailed: Displays all fields with their types
- **Test Dataset**: Toggle between 11 and 30 nodes to test scalability
- **Responsive Design**: Clean, modern UI with dotted grid background
- **Relationship Types**: Supports 1-1, 1-M, M-1, and M-M relationships

## Demo

Open `index.html` in your browser to see the visualizer in action.

## Usage

### Controls

- **Pan**: Click and drag on the canvas background
- **Zoom**: Use the zoom controls (bottom-right) or mouse wheel
- **Move Nodes**: Click and drag any entity card
- **Toggle View**: Switch between Compact and Detailed views (bottom-left)
- **Test Dataset**: Switch between 11 and 30 nodes (outside viewport, bottom-left)

### Customization

Edit the `recordTypes` and `relationships` arrays in `index.html` to customize your ERD:

```javascript
const smallRecordTypes = [
    {
        id: 'entity-id',
        name: 'Entity Name',
        icon: 'Icons/icon.png',
        color: '#E6740A',
        source: 'Database',
        x: 100,
        y: 200,
        fields: [
            { name: 'id', type: 'Number (Integer)', isPrimary: true },
            { name: 'fieldName', type: 'Text' }
        ]
    }
];

const smallRelationships = [
    {
        from: 'entity1-id',
        to: 'entity2-id',
        type: 'M-1',
        label: 'relationship label',
        color: '#9ca3af'
    }
];
```

## File Structure

```
.
├── index.html          # Main HTML file with JavaScript logic
├── styles.css          # Styling and layout
├── Icons/              # Entity and relationship type icons
│   ├── User.png
│   ├── Document.png
│   ├── Record Type.png
│   ├── 1-1.png
│   ├── 1-M.png
│   ├── M-1.png
│   └── M-M.png
└── README.md
```

## Technologies

- Pure HTML5, CSS3, and JavaScript (no frameworks)
- SVG for relationship rendering
- Font Awesome for UI icons

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- SVG
- CSS Grid and Flexbox

## License

MIT License - feel free to use and modify for your projects.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
