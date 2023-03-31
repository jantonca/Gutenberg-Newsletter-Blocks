/* eslint-disable react/jsx-key */
/* eslint-disable no-multi-spaces */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * BLOCK: intermedia-newsletter-blocks-table-image
 *
 * Registering blocks with Gutenberg to crete newsletters.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload, InspectorControls } = wp.blockEditor;
const { 
	Button,
	TextControl,
	RangeControl,
	PanelBody,
	PanelRow,
	ToggleControl,
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
registerBlockType( 'cgb/intermedia-newsletter-blocks-table-image', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Image' ), // Block title.
	icon: 'format-image', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	attributes: {
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image',
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image',
		},
		imageData: {
		},
		imageSizes: {
			type: 'array',
		},
		imageLink: {
			type: 'string',
		},
		imageWidth: {
			type: 'number',
			default: 150,
			attribute: 'width',
			selector: '.deviceWidth',
		},
		imageId: {
		},
		responsiveImageClass: {
			type: 'boolean',
			default: true,
		},
		responsiveClass: {
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
	edit( { attributes, className, setAttributes } ) {
		const toggleClassResponsive = () => {
			setAttributes( { responsiveImageClass: ! attributes.responsiveImageClass } );
		};
		if ( attributes.responsiveImageClass ) {
			setAttributes( {
				responsiveClass: 'deviceWidth',
			} );
		} else {
			setAttributes( {
				responsiveClass: '',
			} );
		}
		const getImageButton = ( openEvent ) => {
			if ( attributes.imageUrl ) {
				return (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events
					// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
					<img
						width={ attributes.imageWidth }
						alt={ className }
						src={ attributes.imageUrl }
						onClick={ openEvent }
						className={ attributes.responsiveClass }
					/>
				);
			}
			return (
				<div className="button-container">
					<Button onClick={ openEvent } className="button button-large" > { 'Pick an image' } </Button>
				</div>
			);
		};
		return ( [
			<InspectorControls>
				<PanelBody title="Table Image Settings" >
					<PanelRow>
						<RangeControl
							className="imageWidth"
							label="Image Width"
							help="Example: 100"
							value={ attributes.imageWidth }
							onChange={ value => setAttributes( { imageWidth: value } ) }
							initialPosition={ attributes.imageWidth }  min={ 1 } max={ 600 }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Resize image in responsive.' ) }
							checked={ !! attributes.responsiveImageClass }
							onChange={ toggleClassResponsive }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Image Link"
							help="Example: #"
							value={ attributes.imageLink }
							onChange={ value => setAttributes( { imageLink: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className="block-image-container">
				<span>Click on the image to replace it</span>
				<MediaUpload
					onSelect={ media => {
						setAttributes( {
							imageAlt: media.alt,
							imageUrl: media.url,
							imageData: media,
							imageSizes: media.sizes,
							imageId: media.id,
						} );
					} }
					type="image"
					value={ attributes.imageId }
					render={ ( { open } ) => getImageButton( open ) }
				/>
			</div>,
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
		const cardImage = ( src, alt, width ) => {
			if ( ! src ) {
				return null;
			}
			if ( alt ) {
				return (
					<img
						className={ attributes.responsiveClass }
						src={ src }
						alt={ alt }
						width={ width }
					/>
				);
			}
			return (
				<img
					className={ attributes.responsiveClass }
					width={ width }
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};
		return (
			<a href={ attributes.imageLink } className="imageLink">
				{ cardImage( attributes.imageUrl, attributes.imageAlt, attributes.imageWidth ) }
			</a>
		);
	},
} );
