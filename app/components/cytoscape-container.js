import Ember from 'ember';

/*global cytoscape*/
export default Ember.Component.extend({
  tagName: '',

  editClicked: function() {
    alert('Edit Clicked');
  },

  mapClicked: function () {
    alert('Map Clicked');
  },


  didInsertElement: function() {
    this._super();
    var cy = cytoscape({
      container: Ember.$('#cy')[0],
      zoom: 1,
      pan: { x: 0, y: 0 },
      fit: false,
      randomize: false,
      elements: [

        { // node or_inner
          data: { id: 'or_inner', parent: 'or_scheduling',
            label: 'Description here to\nthe business services\narchitecture.',
          },
          position: { x: 100, y: 143 },
          selectable: false,
          locked: true,
          classes:'node_with_image'
        },

        { // node edit
          data: { id: 'edit', parent: 'or_scheduling',
            label: 'Edit', color: '#3bdeed'
          },
          classes:'button',
          position: { x: 100, y: 183 },
          selectable: false,
          locked: true,
        },

        { // node map
          data: { id: 'map', parent: 'or_scheduling',
            label: 'Map', color: '#1a1a1a'
          },
          classes:'button',
          position: { x: 150, y: 183 },
          selectable: false,
          locked: true,
        },

        { // node or_scheduling
          data: { id: 'or_scheduling', position: { x: 0, y: 0 }, label: 'OR Scheduling'}
        },

        { // node emgergency
          data: { id: 'emergency', position: { x: 0, y: 0 }}
        },

        { // node emergency_inner
          data: { id: 'emergency_inner', parent: 'emergency',
            label: 'Emergency\nMedicine',
          },
          position: { x: 10, y: 300 },
          classes:'node_with_image'
        },

        { // node radiology
          data: { id: 'radiology', position: { x: 0, y: 0 }}
        },

        { // node radiology_inner
          data: { id: 'radiology_inner', parent: 'radiology',
            label: 'Radiology&\nDiagnostic Imaging\nServices',
          },
          position: { x: 110, y: 320 },
          classes:'node_with_image'
        },

        { // node patient
          data: { id: 'patient', position: { x: 0, y: 0 }}
        },

        { // node patient_inner
          data: { id: 'patient_inner', parent: 'patient',
            label: 'Patient Relationship\nManagement',
          },
          position: { x: 210, y: 350 },
          classes:'node_with_image'
        },

        { // node physicians
          data: { id: 'physician', position: { x: 0, y: 0 }}
        },

        { // node physicians_inner
          data: { id: 'physician_inner', parent: 'physician',
            label: 'Physician Relationship\nManagement',
          },
          position: { x: 310, y: 300 },
          classes:'node_with_image'
        },

        {
          data: {
            id: 'e1',
            source: 'or_scheduling',
            target: 'emergency'
          }
        },

        {
          data: {
            id: 'e2',
            source: 'or_scheduling',
            target: 'radiology'
          }
        },

        {
          data: {
            id: 'e3',
            source: 'or_scheduling',
            target: 'patient'
          }
        },

        {
          data: {
            id: 'e4',
            source: 'or_scheduling',
            target: 'physician'
          }
        }
      ],

      layout: {
        name: 'preset'
      },

      // so we can see the ids
      style: [
        {
          selector: 'edge',
          style: {
            'line-color': 'cyan',
            'width': 1
          }
        },
        {
          selector: 'node',
          style: {
            'content': 'data(label)',
          }
        },
        {
          selector: '.node_with_image',
          style: {
            'shape': 'rectangle',
            'font-size': 6,
            'text-wrap': 'wrap',
            'text-halign': 'center',
            'text-valign': 'bottom',
            'background-image': 'url(../assets/images/note.png)',
            'background-fit': 'cover cover',
            'background-opacity': 0,
          }
        },
        {
          selector: "#or_inner",
          style: {
            'text-halign': 'right',
            'text-valign': 'center'
          }
        },
        {
          selector: ".button",
          style: {
            'shape': 'rectangle',
            'font-size': 6,
            'text-halign': 'center',
            'text-valign': 'center',
            'height': 16,
            'width': 36,
            'background-color': 'data(color)',
            'color': 'white'
          }
        },
        {
          selector: '#or_scheduling',
          style: {
            'text-margin-y': 13,
            'font-size': 10,
            'padding': 20
          }
        }
      ]

    });
    Ember.run.scheduleOnce('afterRender', this, function(){
      cy;
    });
    cy.on('click', 'node', (evt)=>{
      var node = evt.target;
      // eslint-disable-next-line no-console
      console.log( 'clicked ' + node.data('label'));

      if (node.data('id') === 'edit') {
        this.editClicked();
      } else if (node.data('id') === 'map') {
        this.mapClicked();
      }
    });
  },
});
