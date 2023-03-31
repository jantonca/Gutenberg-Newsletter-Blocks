/* eslint-disable react/jsx-key */
/* eslint-disable no-multi-spaces */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * BLOCK: intermedia-newsletter-blocks-table-divider
 *
 * Registering blocks with Gutenberg to crete newsletters.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls } = wp.blockEditor;
const {
	RangeControl,
	PanelBody,
	PanelRow,
	ColorPicker,
} = wp.components;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/intermedia-newsletter-blocks-table-divider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Divider' ), // Block title.
	icon: 'sort', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	attributes: {
		dividerHeight: {
			type: 'number',
			default: 15,
			attribute: 'height',
			selector: '.table-divider',
		},
		dividerBgColor: {
			type: 'string',
		},
		dividerStyle: {
			type: 'array',
			default: [],
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit( { attributes, setAttributes } ) {
		attributes.dividerStyle = {
			margin: '0 auto',
			height: attributes.dividerHeight,
			backgroundColor: attributes.dividerBgColor,
			clear: 'both',
		};
		if ( attributes.dividerBgColor ) {
			return ( [
				<InspectorControls>
					<PanelBody title="Divider Settings" >
						<PanelRow>
							<RangeControl
								className="dividerHeight"
								label="Divider Height"
								help="Example: 15"
								value={ attributes.dividerHeight }
								onChange={ value => setAttributes( { dividerHeight: value } ) }
								initialPosition={ attributes.dividerHeight }  min={ 1 } max={ 100 }
							/>
						</PanelRow>
						<PanelRow>
							<ColorPicker
								color={ attributes.dividerBgColor }
								onChangeComplete={ value => setAttributes( { dividerBgColor: value.hex } ) }
								disableAlpha
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>,
				<div className="table-divider" style={ attributes.dividerStyle } >&nbsp;</div>,
			] );
		}
		return ( [
			<InspectorControls>
				<PanelBody title="Divider Settings" >
					<PanelRow>
						<RangeControl
							className="dividerHeight"
							label="Divider Height"
							help="Example: 15"
							value={ attributes.dividerHeight }
							onChange={ value => setAttributes( { dividerHeight: value } ) }
							initialPosition={ attributes.dividerHeight }  min={ 1 } max={ 100 }
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={ attributes.dividerBgColor }
							onChangeComplete={ value => setAttributes( { dividerBgColor: value.hex } ) }
							disableAlpha
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className="table-divider no-color" style={ attributes.dividerStyle } >&nbsp;</div>,
		] );
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save( { attributes } ) {
		attributes.dividerStyle = {
			margin: '0 auto',
			height: attributes.dividerHeight,
			backgroundColor: attributes.dividerBgColor,
			clear: 'both',
		};
		return (
			<div className="table-divider" style={ attributes.dividerStyle } >&nbsp;</div>
		);
	},
} );
