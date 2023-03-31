/**
 * BLOCK: intermedia-newsletter-blocks-table-polar-ads
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
	TextControl,
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
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
registerBlockType( 'cgb/intermedia-newsletter-blocks-table-polar-ads', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Polar Ads' ), // Block title.
	icon: 'tide', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	//----------------ATTRIBUTES----------------------------------------
	// Set up data model for custom block
	attributes: {
		polarAdType: {
			type: 'string',
		},
		polarAdId: {
			type: 'string',
		},
		dividerStyle: {
			type: 'array',
			default: [],
		},
		dividerHeight: {
			type: 'number',
			default: 5,
			attribute: 'height',
			selector: '.table-divider',
		},
		polarAdText: {
			type: 'string',
		},
		polarImageAlt: {
			attribute: 'alt',
		},
		polarImageUrl: {
			attribute: 'src',
		},
		polarImageLink: {
			type: 'string',
		},
		polarImageWidth: {
			type: 'number',
			attribute: 'width',
		},
		polarImageHeight: {
			type: 'number',
			attribute: 'height',
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
		const polarAdTypesArray = [
			{ label: 'Select Ad Type...', value: '' },
			{ label: 'MREC', value: 'mrec' },
			{ label: 'LEADERBOARD', value: 'leaderboard' },
		];
		const polarAdMrecsArray = [
			{ label: 'Select an Ad...', value: '' },
			{ label: 'MREC 1', value: 'mrec1_polar_id' },
			{ label: 'MREC 2', value: 'mrec2_polar_id' },
			{ label: 'MREC 3', value: 'mrec3_polar_id' },
			{ label: 'MREC 4', value: 'mrec4_polar_id' },
			{ label: 'MREC 5', value: 'mrec5_polar_id' },
			{ label: 'MREC 6', value: 'mrec6_polar_id' },
			{ label: 'MREC 7', value: 'mrec7_polar_id' },
			{ label: 'MREC 8', value: 'mrec8_polar_id' },
		];
		const polarAdLeaderboardArray = [
			{ label: 'Select an Ad...', value: '' },
			{ label: 'LEADERBOARD 1', value: 'lb_polar_id_1' },
			{ label: 'LEADERBOARD 2', value: 'lb_polar_id_2' },
			{ label: 'LEADERBOARD 3', value: 'lb_polar_id_3' },
		];
		const polarAdImage = () => {
			if ( attributes.polarAdType === 'mrec' ) {
				return (
					<img
						width={ attributes.polarImageWidth }
						height={ attributes.polarImageHeight }
						alt={ attributes.polarImageAlt }
						src="https://via.placeholder.com/300x250"
					/>
				);
			} else if ( attributes.polarAdType === 'leaderboard' ) {
				return (
					<img
						width={ attributes.polarImageWidth }
						height={ attributes.polarImageHeight }
						alt={ attributes.polarImageAlt }
						src="https://via.placeholder.com/468x60"
					/>
				);
			}
		};
		attributes.dividerStyle = {
			margin: '0 auto',
			height: attributes.dividerHeight,
			clear: 'both',
		};
		const polarAdDisplay = () => {
			return (
				<div>
					{ polarAdImage() }
					<div className="table-divider no-color" style={ attributes.dividerStyle } >&nbsp;</div>
					<span>{ attributes.polarAdText }</span>
				</div>
			);
		};
		return ( [
			// eslint-disable-next-line react/jsx-key
			<InspectorControls>
				<PanelBody title="Polar Ads Settings" >
					<PanelRow>
						<SelectControl
							label="Polar Ad Types"
							help="Example: MREC"
							value={ attributes.polarAdType }
							options={ polarAdTypesArray }
							onChange={ ( polarAdType ) => setAttributes( { polarAdType: polarAdType } ) }
						/>
					</PanelRow>
					{ attributes.polarAdType === 'mrec' &&
					<PanelRow>
						<SelectControl
							label="MREC Id"
							help="Example: MREC 1"
							value={ attributes.polarAdId }
							options={ polarAdMrecsArray }
							onChange={ ( polarAdId ) => setAttributes( { polarAdId: polarAdId } ) }
						/>
					</PanelRow>
					}
					{ attributes.polarAdType === 'leaderboard' &&
					<PanelRow>
						<SelectControl
							label="LEADERBOARD Id"
							help="Example: LEADERBOARD 1"
							value={ attributes.polarAdId }
							options={ polarAdLeaderboardArray }
							onChange={ ( polarAdId ) => setAttributes( { polarAdId: polarAdId } ) }
						/>
					</PanelRow>
					}
					<PanelRow>
						<TextControl
							label="Advertisment text"
							help="Example: advertisement"
							value={ attributes.polarAdText }
							onChange={ text => setAttributes( { polarAdText: text } ) }
						/>
					</PanelRow>
					<PanelBody title="Divider Settings" >
						<PanelRow>
							<RangeControl
								className="dividerHeight"
								label="Divider Height"
								help="Example: 5"
								value={ attributes.dividerHeight }
								onChange={ value => setAttributes( { dividerHeight: value } ) }
								initialPosition={ attributes.dividerHeight } min={ 1 } max={ 30 }
							/>
						</PanelRow>
					</PanelBody>
				</PanelBody>
			</InspectorControls>,
			polarAdDisplay(),
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
	// eslint-disable-next-line no-unused-vars
	save: props => {
		return null;
	},
} );
