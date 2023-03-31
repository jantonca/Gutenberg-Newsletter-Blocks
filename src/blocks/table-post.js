/* eslint-disable react/jsx-key */
/**
 * BLOCK: intermedia-newsletter-blocks-table
 *
 * Registering blocks with Gutenberg to crete newsletters.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { withSelect } = wp.data;
const {
	InspectorControls,
} = wp.blockEditor;
const {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	ColorPicker,
	TextControl,
	BaseControl,
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
registerBlockType( 'cgb/intermedia-newsletter-blocks-post', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Post' ), // Block title.
	icon: 'media-document', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	//----------------ATTRIBUTES----------------------------------------
	// Set up data model for custom block
	attributes: {
		//POST AND QUERY ATTRIBUTES
		postType: {
			type: 'string',
			default: 'post',
		},
		postCategory: {
			type: 'string',
		},
		newsletterPosition: {
			type: 'string',
		},
		rawPost: {
			type: 'array',
		},
		postId: {
			type: 'number',
		},
		featuredImage: {
			type: 'string',
		},
		featuredMedia: {
			type: 'number',
		},
		// TABLE ATTRIBUTES / inline attributes
		postTableWidth: {
			type: 'string',
		},
		tableBorder: {
			type: 'number',
		},
		cellPadding: {
			type: 'number',
		},
		cellSpacing: {
			type: 'number',
		},
		tableAlign: {
			type: 'string',
		},
		tableBgColor: {
			type: 'string',
		},
		classNames: {
			type: 'string',
		},
		// TABLE ATTRIBUTES / inline style
		tableStyle: {
			type: 'array',
			default: [],
		},
		tableStyleMargin: {
			type: 'string',
		},
		tableStylePadding: {
			type: 'string',
		},
		// CELL ATTRIBUTES / POST TITLE
		titleTdValign: {
			type: 'string',
		},
		titleTdStyles: {
			type: 'array',
			default: [],
		},
		titlePadding: {
			type: 'string',
		},
		titleLineHeight: {
			type: 'string',
		},
		titleLinkStyle: {
			type: 'array',
			default: [],
		},
		titleLinkFontColor: {
			type: 'string',
		},
		titleLinkFontFamily: {
			type: 'string',
		},
		titleLinkFontSize: {
			type: 'string',
		},
		titleLinkFontWeight: {
			type: 'string',
		},
		titleLinkTextAlign: {
			type: 'string',
		},
		titleLinkTextDecoration: {
			type: 'string',
		},
		// CELL ATTRIBUTES / POST FEATURED IMAGE
		displayFeaturedImage: {
			type: 'boolean',
			default: true,
		},
		imageThumbnail: {
			type: 'string',
		},
		imageTdAlign: {
			type: 'string',
		},
		imageWidth: {
			attribute: 'width',
			selector: '.featured-image',
		},
		imageBorder: {
			type: 'number',
		},
		imageBorderRadius: {
			type: 'number',
		},
		imageBg: {
			type: 'string',
		},
		// CELL ATTRIBUTES / POST EXCERPT
		displayExcerpt: {
			type: 'boolean',
			default: true,
		},
		excerptValign: {
			type: 'string',
		},
		excerptTdInlineStyle: {
			type: 'array',
			default: [],
		},
		excerptPadding: {
			type: 'string',
		},
		excerptLineHeight: {
			type: 'string',
		},
		excerptStyle: {
			type: 'array',
			default: [],
		},
		excerptFontColor: {
			type: 'string',
		},
		excerptFontFamily: {
			type: 'string',
		},
		excerptFontSize: {
			type: 'string',
		},
		excerptFontWeight: {
			type: 'string',
		},
		excerptTextAlign: {
			type: 'string',
		},
		// CELL ATTRIBUTES / POST BUTTON
		displayButton: {
			type: 'boolean',
			default: true,
		},
		buttonText: {
			type: 'string',
		},
		buttonTableStyle: {
			type: 'array',
			default: [],
		},
		buttonTableAlign: {
			attribute: 'align',
			selector: '.table-button',
		},
		buttonTableWidth: {
			attribute: 'width',
			selector: '.table-button',
		},
		buttonTdStyle: {
			type: 'array',
			default: [],
		},
		buttonLinkStyle: {
			type: 'array',
			default: [],
		},
		buttonTdBgColor: {
			type: 'string',
		},
		buttonTdPadding: {
			type: 'string',
		},
		buttonLinkFontColor: {
			type: 'string',
		},
		buttonLinkFontFamily: {
			type: 'string',
		},
		buttonLinkFontSize: {
			type: 'string',
		},
		buttonLinkFontWeight: {
			type: 'string',
		},
		buttonLinkTextAlign: {
			type: 'string',
		},
		buttonLinkTextDecoration: {
			type: 'string',
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
	edit: withSelect( ( select, props ) => {
		const queryPost = {
			per_page: 1,
			metaKey: 'intermedia_newsletter_position', // filter by metadata
			metaValue: props.attributes.newsletterPosition,
			//categories: props.attributes.postCategory,
			//	per_page : 10, // set -1 to display ALL
			//	exclude : 50, // or pass multiple values in an array, e.g. [ 1, 9098 ]
			//	parent_exclude : 43, // or [ 43, 44, 98 ]
			//	orderby : 'metaKey',
			//	order : 'asc',
			//	status : 'publish', // or [ 'publish', 'draft', 'future' ]
			//	categories : [ 5, 10, 15 ], // category ID or IDs
			//	tags : 4, // tag ID, you can pass multiple too [ 4, 7 ]
			//	search : 'search query',
		};
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', props.attributes.postType, queryPost ),
		};
	} )( ( { posts, attributes, setAttributes } ) => {
		const cptRegistered = window.intermediaNewsletterBlocksGlobal.cpt_registered;
		const imageCrops = window.intermediaNewsletterBlocksGlobal.image_crops;
		if ( ! posts ) {
			return 'Loading post...';
		}
		if ( posts && posts.length === 0 ) {
			// eslint-disable-next-line no-console
			//console.log( categories[ 0 ] );
			//const rawPositions = categories[ 0 ][ 'newsletter_positions' ];
			const rawPositions = window.intermediaNewsletterBlocksGlobal.newsletter_positions;
			return ( [
				<InspectorControls>
					<PanelBody title="Query Post Settings">
						<PanelRow>
							<SelectControl
								label="Post Types"
								help="Example: post"
								value={ attributes.postType }
								// options={ [
								// 	{ label: 'Select...', value: '' },
								// 	{ label: 'Post', value: 'post' },
								// 	{ label: 'Sponsored Content', value: 'sponsored_content' },
								// 	{ label: 'Video', value: 'video' },
								// ] }
								options={ cptRegistered }
								onChange={ ( postType ) => setAttributes( { postType: postType } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								className="newsletterPositions"
								label={ __( 'Select position:' ) }
								value={ attributes.newsletterPosition }
								onChange={ ( value ) => {
									setAttributes( { newsletterPosition: value } );
								} }
								options={ rawPositions.map( position => {
									return { value: position, label: position };
								} )
								}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>,
				'No post in this position...',
			] );
		}
		const rawPost = posts[ 0 ];
		const rawPositions = window.intermediaNewsletterBlocksGlobal.newsletter_positions;
		attributes.titleTdStyles = {
			padding: attributes.titlePadding,
			textAlign: attributes.titleLinkTextAlign,
			lineHeight: attributes.titleLineHeight,
		};
		if ( rawPost.newspack_featured_image_src ) {
			setAttributes( {
				featuredImage: rawPost.newspack_featured_image_src.landscape,
			} );
		} else {
			setAttributes( {
				featuredImage: 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image',
			} );
		}
		setAttributes( {
			postId: rawPost.id,
			featuredMedia: rawPost.featured_media,
		} );
		const toggleDisplayFeaturedImage = () => {
			setAttributes( { displayFeaturedImage: ! attributes.displayFeaturedImage } );
		};
		const toggleDisplayExcerpt = () => {
			setAttributes( { displayExcerpt: ! attributes.displayExcerpt } );
		};
		const toggleDisplayButton = () => {
			setAttributes( { displayButton: ! attributes.displayButton } );
		};
		attributes.titleLinkStyle = {
			color: attributes.titleLinkFontColor,
			fontFamily: attributes.titleLinkFontFamily,
			fontSize: attributes.titleLinkFontSize,
			fontWeight: attributes.titleLinkFontWeight,
			textAlign: attributes.titleLinkTextAlign,
			textDecoration: attributes.titleLinkTextDecoration,
		};
		const postTitle = () => {
			if ( rawPost ) {
				return (
					<a href={ rawPost.link } style={ attributes.titleLinkStyle } className="title" >
						{ rawPost.title.raw }
					</a>
				);
			}
		};
		const featuredImageItem = () => {
			if ( attributes.displayFeaturedImage ) {
				return (
					<img
						width={ attributes.imageWidth }
						border={ attributes.imageborder }
						alt={ 'post img' }
						src={ attributes.featuredImage }
						className="featured-image"
					/>
				);
			}
		};
		attributes.excerptStyle = {
			color: attributes.excerptFontColor,
			fontFamily: attributes.excerptFontFamily,
			fontSize: attributes.excerptFontSize,
			fontWeight: attributes.excerptFontWeight,
			textAlign: attributes.excerptTextAlign,
		};
		const excerptItem = () => {
			if ( attributes.displayExcerpt ) {
				return (
					<p style={ attributes.excerptStyle } className="excerpt" >{ rawPost.excerpt.raw }</p>
				);
			}
		};
		attributes.excerptTdInlineStyle = {
			padding: attributes.excerptPadding,
			lineHeight: attributes.excerptLineHeight,
		};
		attributes.buttonTdStyle = {
			backgroundColor: attributes.buttonTdBgColor,
			padding: attributes.buttonTdPadding,
		};
		attributes.buttonLinkStyle = {
			color: attributes.buttonLinkFontColor,
			fontFamily: attributes.buttonLinkFontFamily,
			fontSize: attributes.buttonLinkFontSize,
			fontWeight: attributes.buttonLinkFontWeight,
			textAlign: attributes.buttonLinkTextAlign,
			textDecoration: attributes.buttonLinkTextDecoration,
		};
		const buttonItem = () => {
			if ( attributes.displayButton ) {
				return (
					<table
						width={ attributes.buttonTableWidth }
						align={ attributes.buttonTableAlign }
						className="table-button"
					>
						<tr>
							<td
								bgcolor={ attributes.buttonTdBgColor }
								style={ attributes.buttonTdStyle }
								align={ attributes.buttonLinkTextAlign }
							>
								<a
									href={ rawPost.link }
									style={ attributes.buttonLinkStyle }
								>
									{ attributes.buttonText }
								</a>
							</td>
						</tr>
					</table>
				);
			}
		};
		attributes.tableStyle = {
			margin: attributes.tableStyleMargin,
			padding: attributes.tableStylePadding,
			backgroundColor: attributes.tableBgColor,
		};
		const tablePost = () => {
			return (
				<table
					width={ attributes.postTableWidth }
					border={ attributes.tableBorder }
					cellPadding={ attributes.cellPadding }
					cellSpacing={ attributes.cellSpacing }
					align={ attributes.tableAlign }
					bgcolor={ attributes.tableBgColor }
					className={ 'tablePost' + attributes.classNames }
					style={ attributes.tableStyle }
				>
					<tr>
						<td
							align={ attributes.imageTdAlign }
							bgcolor={ attributes.imageBg }
						>
							{ featuredImageItem() }
						</td>
					</tr>
					<tr>
						<td
							valig={ attributes.titleTdValign }
							align={ attributes.titleLinkTextAlign }
							style={ attributes.titleTdStyles }
						>
							{ postTitle() }
						</td>
					</tr>
					<tr>
						<td
							valig={ attributes.excerptValign }
							align={ attributes.excerptTextAlign }
							style={ attributes.excerptTdInlineStyle }
						>
							{ excerptItem() }
						</td>
					</tr>
					<tr>
						<td>
							{ buttonItem() }
						</td>
					</tr>
				</table>
			);
		};
		return ( [
			<InspectorControls>
				<PanelBody title="Query Settings">
					<PanelRow>
						<SelectControl
							label="Post Type"
							help="Example: post"
							value={ attributes.postType }
							options={ cptRegistered }
							onChange={ ( postType ) => setAttributes( { postType: postType } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							className="newsletterPositions"
							label={ __( 'Select position:' ) }
							value={ attributes.newsletterPosition }
							onChange={ ( value ) => {
								setAttributes( { newsletterPosition: value } );
							} }
							options={ rawPositions.map( position => {
								return { value: position, label: position };
							} )
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Table Settings">
					<PanelRow>
						<TextControl
							className="postTableWidth"
							label="Table width"
							help="Example: 580 / 100%"
							value={ attributes.postTableWidth }
							onChange={ value => setAttributes( { postTableWidth: value } ) }
						/>
					</PanelRow>
					<RangeControl
						className="tableBorder"
						label="Table border"
						help="Example: 0"
						value={ attributes.tableBorder }
						onChange={ value => setAttributes( { tableBorder: value } ) }
						initialPosition={ attributes.tableBorder } min={ 0 } max={ 20 }
					/>
					<PanelRow>
						<RangeControl
							className="tablecellPadding"
							label="Table cellPadding"
							help="Example: 0"
							value={ attributes.cellPadding }
							onChange={ value => setAttributes( { cellPadding: value } ) }
							initialPosition={ attributes.cellPadding } min={ 0 } max={ 20 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							className="tablecellSpacing"
							label="Table cellSpacing"
							help="Example: 0"
							value={ attributes.cellSpacing }
							onChange={ value => setAttributes( { cellSpacing: value } ) }
							initialPosition={ attributes.cellSpacing } min={ 0 } max={ 50 }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Table align"
							help="Example: Center"
							value={ attributes.tableAlign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( tableAlign ) => setAttributes( { tableAlign: tableAlign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<BaseControl
							id="tableColor"
							label={ __( 'Table Background color' ) }
							help="Example: #ffffff"
						>
							<ColorPicker
								id="tableColor"
								color={ attributes.tableBgColor }
								onChangeComplete={ value => setAttributes( { tableBgColor: value.hex } ) }
								disableAlpha
							/>
						</BaseControl>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Metadata Settings">
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Featured Image' ) }
							checked={ !! attributes.displayFeaturedImage }
							onChange={ toggleDisplayFeaturedImage }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Excerpt' ) }
							checked={ !! attributes.displayExcerpt }
							onChange={ toggleDisplayExcerpt }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Button' ) }
							checked={ !! attributes.displayButton }
							onChange={ toggleDisplayButton }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Title Settings">
					<PanelRow>
						<SelectControl
							label="Title Cell valign"
							help="Example: Middle"
							value={ attributes.titleTdValign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Top', value: 'top' },
								{ label: 'Middle', value: 'middle' },
								{ label: 'Bottom', value: 'bottom' },
								{ label: 'Baseline', value: 'baseline' },
							] }
							onChange={ ( titleTdValign ) => setAttributes( { titleTdValign: titleTdValign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="titleInlinepadding"
							label="Title Padding"
							help="Example: 0 5px 5px 0"
							value={ attributes.titlePadding }
							onChange={ value => setAttributes( { titlePadding: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="titleLineHeight"
							label="Title line-height"
							help="Example: 100%"
							value={ attributes.titleLineHeight }
							onChange={ value => setAttributes( { titleLineHeight: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<BaseControl
							id="titleLinkFontColor"
							label={ __( 'Font Color' ) }
							help="Example: #363636"
						>
							<ColorPicker
								id="titleLinkFontColor"
								color={ attributes.titleLinkFontColor }
								onChangeComplete={ value => setAttributes( { titleLinkFontColor: value.hex } ) }
								disableAlpha
							/>
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Font Family"
							help="Example: Arial, sans-serif"
							value={ attributes.titleLinkFontFamily }
							onChange={ value => setAttributes( { titleLinkFontFamily: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Font Size"
							help="Example: 16px"
							value={ attributes.titleLinkFontSize }
							onChange={ value => setAttributes( { titleLinkFontSize: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Font Weight"
							help="Example: bold"
							value={ attributes.titleLinkFontWeight }
							onChange={ value => setAttributes( { titleLinkFontWeight: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Title align"
							help="Example: Left"
							value={ attributes.titleLinkTextAlign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( titleLinkTextAlign ) => setAttributes( { titleLinkTextAlign: titleLinkTextAlign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Link Decoration"
							help="Example: none"
							value={ attributes.titleLinkTextDecoration }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'None', value: 'none' },
								{ label: 'Overline', value: 'overline' },
								{ label: 'Underline', value: 'underline' },
								{ label: 'Line-through', value: 'line-through' },
								{ label: 'Underline & Overline', value: 'underline overline' },
							] }
							onChange={ ( titleLinkTextDecoration ) => setAttributes( { titleLinkTextDecoration: titleLinkTextDecoration } ) }
						/>
					</PanelRow>
				</PanelBody>
				{ attributes.displayFeaturedImage &&
					<PanelBody title="Featured Image Settings">
						<PanelRow>
							<SelectControl
								className="imageThumbnail"
								label={ __( 'Select a image thumbnail' ) }
								value={ attributes.imageThumbnail }
								onChange={ ( value ) => {
									setAttributes( { imageThumbnail: value } );
								} }
								options={ imageCrops.map( thumb => {
									return { value: thumb, label: thumb };
								} )
								}
								// options={ rawPost.featured_image_data.map( thumb => {
								// 	return { value: thumb, label: thumb };
								// } )
								// }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Image align"
								help="Example: center"
								value={ attributes.imageTdAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( imageTdAlign ) => setAttributes( { imageTdAlign: imageTdAlign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="imagewidth"
								label="Image width"
								help="Example: 260"
								value={ attributes.imageWidth }
								onChange={ value => setAttributes( { imageWidth: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="imageBorder"
								label="Image border"
								help="Example: 0"
								value={ attributes.imageBorder }
								onChange={ value => setAttributes( { imageBorder: value } ) }
								initialPosition={ attributes.imageBorder } min={ 0 } max={ 20 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="imageBorderRadius"
								label="Image border Radius"
								help="Example: 4"
								value={ attributes.imageBorderRadius }
								onChange={ value => setAttributes( { imageBorderRadius: value } ) }
								initialPosition={ attributes.imageBorderRadius } min={ 0 } max={ 100 }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="imageBg"
								label={ __( 'Background Image' ) }
								help="Example: #959595"
							>
								<ColorPicker
									id="imageBg"
									color={ attributes.imageBg }
									onChangeComplete={ value => setAttributes( { imageBg: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
					</PanelBody>
				}
				{ attributes.displayExcerpt &&
					<PanelBody title="Excerpt Settings">
						<PanelRow>
							<SelectControl
								label="Excerpt valign"
								help="Example: Middle"
								value={ attributes.excerptValign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Top', value: 'top' },
									{ label: 'Middle', value: 'middle' },
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Baseline', value: 'baseline' },
								] }
								onChange={ ( excerptValign ) => setAttributes( { excerptValign: excerptValign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="excerptInlinepadding"
								label="Padding"
								help="Example: 0 5px 5px 0"
								value={ attributes.excerptPadding }
								onChange={ value => setAttributes( { excerptPadding: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="excerptInlineLineHeight"
								label="Line-height"
								help="Example: 100%"
								value={ attributes.excerptLineHeight }
								onChange={ value => setAttributes( { excerptLineHeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="excerptFontColor"
								label={ __( 'Font Color' ) }
								help="Example: #959595"
							>
								<ColorPicker
									id="excerptFontColor"
									color={ attributes.excerptFontColor }
									onChangeComplete={ value => setAttributes( { excerptFontColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Family"
								help="Example: Georgia, Times, serif"
								value={ attributes.excerptFontFamily }
								onChange={ value => setAttributes( { excerptFontFamily: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Size"
								help="Example: 14px"
								value={ attributes.excerptFontSize }
								onChange={ value => setAttributes( { excerptFontSize: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Weight"
								help="Example: 400"
								value={ attributes.excerptFontWeight }
								onChange={ value => setAttributes( { excerptFontWeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Text align"
								help="Example: Left"
								value={ attributes.excerptTextAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( excerptTextAlign ) => setAttributes( { excerptTextAlign: excerptTextAlign } ) }
							/>
						</PanelRow>
					</PanelBody>
				}
				{ attributes.displayButton &&
					<PanelBody title="Button Settings">
						<PanelRow>
							<TextControl
								className="buttonText"
								label="Button Text"
								help="Example: Read More"
								value={ attributes.buttonText }
								onChange={ value => setAttributes( { buttonText: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tableInlinewidth"
								label="Button width"
								help="Example: 90"
								value={ attributes.buttonTableWidth }
								onChange={ value => setAttributes( { buttonTableWidth: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Button align"
								help="Example: Left"
								value={ attributes.buttonTableAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( buttonTableAlign ) => setAttributes( { buttonTableAlign: buttonTableAlign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="buttonTdBgColor"
								label={ __( 'Background Color' ) }
								help="Example: #eeeeee"
							>
								<ColorPicker
									id="buttonTdBgColor"
									color={ attributes.buttonTdBgColor }
									onChangeComplete={ value => setAttributes( { buttonTdBgColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="buttonLinkFontColor"
								label={ __( 'Font Color' ) }
								help="Example: #333"
							>
								<ColorPicker
									id="buttonLinkFontColor"
									color={ attributes.buttonLinkFontColor }
									onChangeComplete={ value => setAttributes( { buttonLinkFontColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlinepadding"
								label="Cell Padding"
								help="Example: 5px 0"
								value={ attributes.buttonTdPadding }
								onChange={ value => setAttributes( { buttonTdPadding: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Family"
								help="Example: Arial, sans-serif"
								value={ attributes.buttonLinkFontFamily }
								onChange={ value => setAttributes( { buttonLinkFontFamily: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Size"
								help="Example: 12px"
								value={ attributes.buttonLinkFontSize }
								onChange={ value => setAttributes( { buttonLinkFontSize: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Weight"
								help="Example: bold"
								value={ attributes.buttonLinkFontWeight }
								onChange={ value => setAttributes( { buttonLinkFontWeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Button text align"
								help="Example: Center"
								value={ attributes.buttonLinkTextAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( buttonLinkTextAlign ) => setAttributes( { buttonLinkTextAlign: buttonLinkTextAlign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Link Decoration"
								help="Example: none"
								value={ attributes.buttonLinkTextDecoration }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'None', value: 'none' },
									{ label: 'Overline', value: 'overline' },
									{ label: 'Underline', value: 'underline' },
									{ label: 'Line-through', value: 'line-through' },
									{ label: 'Underline & Overline', value: 'underline overline' },
								] }
								onChange={ ( buttonLinkTextDecoration ) => setAttributes( { buttonLinkTextDecoration: buttonLinkTextDecoration } ) }
							/>
						</PanelRow>
					</PanelBody>
				}
			</InspectorControls>,
			tablePost(),
		] );
	} ),
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

	// The output on the live site
	// eslint-disable-next-line no-unused-vars
	save: props => {
		return null;
	},
} );
