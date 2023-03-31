/* eslint-disable react/jsx-key */
/**
 * BLOCK: intermedia-newsletter-blocks-polar-sponsor-content
 *
 * Registering blocks with Gutenberg to crete newsletters.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
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
 * Register: a Gutenberg Block.
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
registerBlockType( 'cgb/intermedia-newsletter-blocks-polar-sponsor-content', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Polar Sponsor Content' ), // Block title.
	icon: 'tag', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	//----------------ATTRIBUTES----------------------------------------
	// Set up data model for custom block
	attributes: {
		polarSponsorContentType: {
			type: 'string',
		},
		polarSponsorContentId: {
			type: 'string',
		},
		// TABLE FEATURED IMAGE ATTRIBUTES / inline attributes
		imageTableWidth: {
			type: 'string',
		},
		imageTableBorder: {
			type: 'number',
		},
		imageCellPadding: {
			type: 'number',
		},
		imageCellSpacing: {
			type: 'number',
		},
		imageTableAlign: {
			type: 'string',
		},
		imageTableBgColor: {
			type: 'string',
		},
		imageClassNames: {
			type: 'string',
		},
		tableDividerTop: {
			type: 'number',
		},
		// TABLE FEATURED IMAGE ATTRIBUTES / inline style
		imageTableStyle: {
			type: 'array',
			default: [],
		},
		imageTableStyleMargin: {
			type: 'string',
		},
		imageTableStylePadding: {
			type: 'string',
		},
		// CELL ATTRIBUTES / EVENT FEATURED IMAGE
		displayImage: {
			type: 'boolean',
			default: true,
		},
		imageThumbnail: {
			type: 'string',
		},
		imageTdAlign: {
			type: 'string',
		},
		imageTdValign: {
			type: 'string',
		},
		imageTdClass: {
			type: 'string',
		},
		imageTdStyle: {
			type: 'array',
			default: [],
		},
		imageTdStyleMargin: {
			type: 'string',
		},
		imageTdStylePadding: {
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
		imageInlineStyle: {
			type: 'array',
			default: [],
		},
		// TABLE DATA *****************************************************************
		dataTableWidth: {
			type: 'string',
		},
		dataTableBorder: {
			type: 'number',
		},
		dataCellPadding: {
			type: 'number',
		},
		dataCellSpacing: {
			type: 'number',
		},
		dataTableAlign: {
			type: 'string',
		},
		dataTableBgColor: {
			type: 'string',
		},
		dataTableClassNames: {
			type: 'string',
		},
		// DATA TABLE inline style
		dataTableStyle: {
			type: 'array',
			default: [],
		},
		dataTableStyleMargin: {
			type: 'string',
		},
		dataTableStylePadding: {
			type: 'string',
		},
		// CELL ATTRIBUTES / SPONSOR TITLE
		titleTdAlign: {
			type: 'string',
		},
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
		// CELL ATTRIBUTES / SPONSOR EXCERPT
		displayExcerpt: {
			type: 'boolean',
			default: true,
		},
		excerptValign: {
			type: 'string',
		},
		excerptAlign: {
			type: 'string',
		},
		excerptPadding: {
			type: 'string',
		},
		excerptLineHeight: {
			type: 'string',
		},
		excerptStyles: {
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
		// CELL ATTRIBUTES / SPONSOR NAME
		displayName: {
			type: 'boolean',
			default: true,
		},
		nameTex: {
			type: 'string',
			default: 'Sponsored by',
		},
		nameValign: {
			type: 'string',
		},
		nameAlign: {
			type: 'string',
		},
		nameStyles: {
			type: 'array',
			default: [],
		},
		namePadding: {
			type: 'string',
		},
		nameLineHeight: {
			type: 'string',
		},
		nameFontColor: {
			type: 'string',
		},
		nameFontFamily: {
			type: 'string',
		},
		nameFontSize: {
			type: 'string',
		},
		nameFontWeight: {
			type: 'string',
		},
		// CELL ATTRIBUTES / POST BUTTON***************************************
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
	edit( { attributes, setAttributes } ) {
		const polarSponsorContentTypesArray = [
			{ label: 'Select Sponsor Content Type...', value: '' },
			{ label: 'SPONSOR CONTENT', value: 'sponsorContent' },
			{ label: 'TEXT AD', value: 'textAd' },
		];
		const polarSponsorContentArray = [
			{ label: 'Select sponsored content...', value: '' },
			{ label: 'Sponsor Content 1', value: 'sc_1' },
			{ label: 'Sponsor Content 2', value: 'sc_2' },
			{ label: 'Sponsor Content 3', value: 'sc_3' },
		];
		const polarTextAdArray = [
			{ label: 'Select Text Ad Id...', value: '' },
			{ label: 'Text Ad 1', value: 'text_ad_1' },
			{ label: 'Text Ad 2', value: 'text_ad_2' },
		];
		const toggleDisplayImage = () => {
			setAttributes( { displayImage: ! attributes.displayImage } );
		};
		const toggleDisplayExcerpt = () => {
			setAttributes( { displayExcerpt: ! attributes.displayExcerpt } );
		};
		const toggleDisplayName = () => {
			setAttributes( { displayName: ! attributes.displayName } );
		};
		const toggleDisplayButton = () => {
			setAttributes( { displayButton: ! attributes.displayButton } );
		};
		// ENDS EVENTS SETTINGS SECTION
		// STARTS TABLE IMAGE SECTION
		attributes.imageTableStyle = {
			margin: attributes.imageTableStyleMargin,
			padding: attributes.imageTableStylePadding,
			backgroundColor: attributes.imageTableBgColor,
		};
		attributes.imageTdStyle = {
			margin: attributes.imageTdStyleMargin,
			padding: attributes.imageTdStylePadding,
			backgroundColor: attributes.imageBg,
		};
		attributes.imageInlineStyle = {
			borderRadius: attributes.imageBorderRadius,
		};
		const sponsorContentImage = () => {
			if ( ! attributes.imageWidth ) {
				attributes.imageWidth = 150;
			}
			return (
				<img
					width={ attributes.imageWidth }
					border={ attributes.imageBorder }
					alt={ 'Sponsor content' }
					src={ 'https://via.placeholder.com/600x450' }
					className="sponsorContentImage"
					style={ attributes.imageInlineStyle }
				/>
			);
		};
		const imageTable = () => {
			if ( attributes.displayImage ) {
				return (
					<table
						width={ attributes.imageTableWidth }
						border={ attributes.imageTableBorder }
						cellPadding={ attributes.imageCellPadding }
						cellSpacing={ attributes.imageCellSpacing }
						align={ attributes.imageTableAlign }
						bgcolor={ attributes.imageTableBgColor }
						className={ 'tableImage' + attributes.imageTableClassNames }
						style={ attributes.imageTableStyle }
					>
						<tr>
							<td
								align={ attributes.imageTdAlign }
								valign={ attributes.imageTdValign }
								bgcolor={ attributes.imageBg }
								className={ 'tableImage' + attributes.imageTdClassNames }
								style={ attributes.imageTdStyle }
							>
								{ sponsorContentImage() }
							</td>
						</tr>
					</table>
				);
			}
		};
		const tableDividerTop = () => {
			const tableDividerStyle = {
				margin: '0 auto',
				height: attributes.tableDividerTop,
				clear: 'both',
			};
			return (
				<div className="table-divider" style={ tableDividerStyle } >&nbsp;</div>
			);
		};
		// ENDS TABLE IMAGE SECTION
		// STARTS TABLE DATA SECTION
		//TITLE
		const title = () => {
			return 'Sponsor Content Title';
		};
		attributes.titleTdStyles = {
			padding: attributes.titlePadding,
			textAlign: attributes.titleLinkTextAlign,
			lineHeight: attributes.titleLineHeight,
		};
		attributes.titleLinkStyle = {
			color: attributes.titleLinkFontColor,
			fontFamily: attributes.titleLinkFontFamily,
			fontSize: attributes.titleLinkFontSize,
			fontWeight: attributes.titleLinkFontWeight,
			textAlign: attributes.titleLinkTextAlign,
			textDecoration: attributes.titleLinkTextDecoration,
		};
		//EXCERPT
		const excerpt = () => {
			if ( attributes.displayExcerpt ) {
				return 'Sponsor Content excerpt';
			}
		};
		attributes.excerptStyles = {
			fontFamily: attributes.excerptFontFamily,
			fontSize: attributes.excerptFontSize,
			fontWeight: attributes.excerptFontWeight,
			color: attributes.excerptFontColor,
			textAlign: attributes.excerptAlign,
			lineHeight: attributes.excerptLineHeight,
			padding: attributes.excerptPadding,
		};
		//SPONSOR NAME
		const sponsor = () => {
			if ( attributes.displayName ) {
				return attributes.nameTex + ' Whoever';
			}
		};
		attributes.nameStyles = {
			fontFamily: attributes.nameFontFamily,
			fontSize: attributes.nameFontSize,
			fontWeight: attributes.nameFontWeight,
			color: attributes.nameFontColor,
			textAlign: attributes.nameTextAlign,
			lineHeight: attributes.nameLineHeight,
			padding: attributes.namePadding,
		};
		//BUTTON
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
						border="0"
						cellPadding="0"
						cellSpacing="0"
						className="table-button"
					>
						<tr>
							<td
								bgcolor={ attributes.buttonTdBgColor }
								style={ attributes.buttonTdStyle }
								align={ attributes.buttonLinkTextAlign }
							>
								<a
									href="/"
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
		//FINAL TABLE
		const dataTable = () => {
			return (
				<table
					width={ attributes.dataTableWidth }
					border={ attributes.dataTableBorder }
					cellPadding={ attributes.dataCellPadding }
					cellSpacing={ attributes.dataCellSpacing }
					align={ attributes.dataTableAlign }
					bgcolor={ attributes.dataTableBgColor }
					className={ 'tableData ' + attributes.dataTableClassNames }
					style={ attributes.datatableStyle }
				>
					<tr>
						<td
							align={ attributes.titleTdAlign }
							valign={ attributes.titleTdValign }
							style={ attributes.titleTdStyles }>
							<a href="/" style={ attributes.titleLinkStyle } className="title" >
								{ title() }
							</a>
						</td>
					</tr>
					<tr>
						<td
							align={ attributes.excerptAlign }
							valign={ attributes.excerptValign }
							style={ attributes.excerptStyles }>
							{ excerpt() }
						</td>
					</tr>
					<tr>
						<td>
							{ buttonItem() }
						</td>
					</tr>
					<tr>
						<td
							align={ attributes.nameAlign }
							valign={ attributes.nameValign }
							style={ attributes.nameStyles }>
							{ sponsor() }
						</td>
					</tr>
				</table>
			);
		};
		return ( [
			<InspectorControls>
				<PanelBody title="Sponsor Content Settings">
					<PanelRow>
						<SelectControl
							label="Sponsor Content Types"
							help="Example: SPONSOR CONTENT"
							value={ attributes.polarSponsorContentType }
							options={ polarSponsorContentTypesArray }
							onChange={ ( polarSponsorContentType ) => setAttributes( { polarSponsorContentType: polarSponsorContentType } ) }
						/>
					</PanelRow>
					{ attributes.polarSponsorContentType === 'sponsorContent' &&
					<PanelRow>
						<SelectControl
							label="Sponsor Content Id"
							help="Example: Sponsor Content 1"
							value={ attributes.polarSponsorContentId }
							options={ polarSponsorContentArray }
							onChange={ ( polarSponsorContentId ) => setAttributes( { polarSponsorContentId: polarSponsorContentId } ) }
						/>
					</PanelRow>
					}
					{ attributes.polarSponsorContentType === 'textAd' &&
					<PanelRow>
						<SelectControl
							label="Text AD Id"
							help="Example: Text AD 1"
							value={ attributes.polarSponsorContentId }
							options={ polarTextAdArray }
							onChange={ ( polarSponsorContentId ) => setAttributes( { polarSponsorContentId: polarSponsorContentId } ) }
						/>
					</PanelRow>
					}
				</PanelBody>
				<PanelBody title="Metadata Settings">
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Image' ) }
							checked={ !! attributes.displayImage }
							onChange={ toggleDisplayImage }
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
							label={ __( 'Display Sponsor Name' ) }
							checked={ !! attributes.displayName }
							onChange={ toggleDisplayName }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Button' ) }
							checked={ !! attributes.displayButton }
							onChange={ toggleDisplayButton }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							className="dividerHeight"
							label="Divider Height"
							help="Example: 15"
							value={ attributes.tableDividerTop }
							onChange={ value => setAttributes( { tableDividerTop: value } ) }
							initialPosition={ attributes.tableDividerTop } min={ 0 } max={ 100 }
						/>
					</PanelRow>
				</PanelBody>
				{ attributes.displayImage &&
					<PanelBody title="Table Image">
						<PanelRow>
							<TextControl
								className="imageTableWidth"
								label="Table width"
								help="Example: 580 / 100%"
								value={ attributes.imageTableWidth }
								onChange={ value => setAttributes( { imageTableWidth: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="imageTableBorder"
								label="Table border"
								help="Example: 0"
								value={ attributes.imageTableBorder }
								onChange={ value => setAttributes( { imageTableBorder: value } ) }
								initialPosition={ attributes.imageTableBorder } min={ 0 } max={ 20 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="imageCellPadding"
								label="Table CellPadding"
								help="Example: 0"
								value={ attributes.imageCellPadding }
								onChange={ value => setAttributes( { imageCellPadding: value } ) }
								initialPosition={ attributes.imageCellPadding } min={ 0 } max={ 20 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="tablecellSpacing"
								label="Table cellSpacing"
								help="Example: 0"
								value={ attributes.imageCellSpacing }
								onChange={ value => setAttributes( { imageCellSpacing: value } ) }
								initialPosition={ attributes.imageCellSpacing } min={ 0 } max={ 50 }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Table align"
								help="Example: Center"
								value={ attributes.imageTableAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( imageTableAlign ) => setAttributes( { imageTableAlign: imageTableAlign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="imageTableBgColor"
								label={ __( 'Table Background color' ) }
								help="Example: #ffffff"
							>
								<ColorPicker
									id="imageTableBgColor"
									color={ attributes.imageTableBgColor }
									onChangeComplete={ value => setAttributes( { imageTableBgColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="imageTableClassNames"
								label="Table class names"
								help="Example: my-class"
								value={ attributes.imageTableClassNames }
								onChange={ value => setAttributes( { imageTableClassNames: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="imageTdClassNames"
								label="Cell class names"
								help="Example: my-class"
								value={ attributes.imageTdClassNames }
								onChange={ value => setAttributes( { imageTdClassNames: value } ) }
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
				<PanelBody title="Table Data">
					<PanelRow>
						<TextControl
							className="dataTableWidth"
							label="Table width"
							help="Example: 580 / 100%"
							value={ attributes.dataTableWidth }
							onChange={ value => setAttributes( { dataTableWidth: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							className="dataTableBorder"
							label="Table border"
							help="Example: 0"
							value={ attributes.dataTableBorder }
							onChange={ value => setAttributes( { dataTableBorder: value } ) }
							initialPosition={ attributes.dataTableBorder } min={ 0 } max={ 20 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							className="dataCellPadding"
							label="Table CellPadding"
							help="Example: 0"
							value={ attributes.dataCellPadding }
							onChange={ value => setAttributes( { dataCellPadding: value } ) }
							initialPosition={ attributes.dataCellPadding } min={ 0 } max={ 20 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							className="tablecellSpacing"
							label="Table cellSpacing"
							help="Example: 0"
							value={ attributes.dataCellSpacing }
							onChange={ value => setAttributes( { dataCellSpacing: value } ) }
							initialPosition={ attributes.dataCellSpacing } min={ 0 } max={ 50 }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Table align"
							help="Example: Left"
							value={ attributes.dataTableAlign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( dataTableAlign ) => setAttributes( { dataTableAlign: dataTableAlign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<BaseControl
							id="dataTableBgColor"
							label={ __( 'Table Background color' ) }
							help="Example: #ffffff"
						>
							<ColorPicker
								id="dataTableBgColor"
								color={ attributes.dataTableBgColor }
								onChangeComplete={ value => setAttributes( { dataTableBgColor: value.hex } ) }
								disableAlpha
							/>
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Cell align"
							help="Example: Left"
							value={ attributes.dataTdAlign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( dataTdAlign ) => setAttributes( { dataTdAlign: dataTdAlign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Cell Valign"
							help="Example: middle"
							value={ attributes.dataTdValign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Top', value: 'top' },
								{ label: 'Middle', value: 'middle' },
								{ label: 'Bottom', value: 'bottom' },
								{ label: 'Baseline', value: 'baseline' },
							] }
							onChange={ ( dataTdValign ) => setAttributes( { dataTdValign: dataTdValign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="dataTableClassNames"
							label="Table class names"
							help="Example: my-class"
							value={ attributes.dataTableClassNames }
							onChange={ value => setAttributes( { dataTableClassNames: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="dataTdClassNames"
							label="Cell class names"
							help="Example: my-class"
							value={ attributes.dataTdClassNames }
							onChange={ value => setAttributes( { dataTdClassNames: value } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Title Settings">
					<PanelRow>
						<SelectControl
							label="Title Cell align"
							help="Example: Left"
							value={ attributes.titleTdValign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( titleTdValign ) => setAttributes( { titleTdValign: titleTdValign } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Title Cell valign"
							help="Example: Middle"
							value={ attributes.titleTdAlign }
							options={ [
								{ label: 'Select...', value: '' },
								{ label: 'Top', value: 'top' },
								{ label: 'Middle', value: 'middle' },
								{ label: 'Bottom', value: 'bottom' },
								{ label: 'Baseline', value: 'baseline' },
							] }
							onChange={ ( titleTdAlign ) => setAttributes( { titleTdAlign: titleTdAlign } ) }
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
				{ attributes.displayExcerpt &&
					<PanelBody title="Excerpt Settings">
						{ /* valign */ }
						<PanelRow>
							<SelectControl
								label="Valign"
								help="Example: Middle"
								value={ attributes.nameValign }
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
						{ /* align */ }
						<PanelRow>
							<SelectControl
								label="Text align"
								help="Example: Left"
								value={ attributes.excerptAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( excerptAlign ) => setAttributes( { excerptAlign: excerptAlign } ) }
							/>
						</PanelRow>
						{ /* padding */ }
						<PanelRow>
							<TextControl
								label="Padding"
								help="Example: 0 5px 5px 0"
								value={ attributes.excerptPadding }
								onChange={ value => setAttributes( { excerptPadding: value } ) }
							/>
						</PanelRow>
						{ /* line-height */ }
						<PanelRow>
							<TextControl
								label="Line-height"
								help="Example: 100%"
								value={ attributes.excerptLineHeight }
								onChange={ value => setAttributes( { excerptLineHeight: value } ) }
							/>
						</PanelRow>
						{ /* font color */ }
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
						{ /* font family */ }
						<PanelRow>
							<TextControl
								label="Font Family"
								help="Example: Georgia, Times, serif"
								value={ attributes.excerptFontFamily }
								onChange={ value => setAttributes( { excerptFontFamily: value } ) }
							/>
						</PanelRow>
						{ /* font size */ }
						<PanelRow>
							<TextControl
								label="Font Size"
								help="Example: 14px"
								value={ attributes.excerptFontSize }
								onChange={ value => setAttributes( { excerptFontSize: value } ) }
							/>
						</PanelRow>
						{ /* font weight */ }
						<PanelRow>
							<TextControl
								label="Font Weight"
								help="Example: 400"
								value={ attributes.excerptFontWeight }
								onChange={ value => setAttributes( { excerptFontWeight: value } ) }
							/>
						</PanelRow>
					</PanelBody>
				}
				{ attributes.displayName &&
					<PanelBody title="Name Settings">
						{ /* font weight */ }
						<PanelRow>
							<TextControl
								label="Name Text"
								help="Sponsored by"
								value={ attributes.nameTex }
								onChange={ value => setAttributes( { nameTex: value } ) }
							/>
						</PanelRow>
						{ /* valign */ }
						<PanelRow>
							<SelectControl
								label="Name valign"
								help="Example: Middle"
								value={ attributes.nameValign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Top', value: 'top' },
									{ label: 'Middle', value: 'middle' },
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Baseline', value: 'baseline' },
								] }
								onChange={ ( nameValign ) => setAttributes( { nameValign: nameValign } ) }
							/>
						</PanelRow>
						{ /* align */ }
						<PanelRow>
							<SelectControl
								label="Text align"
								help="Example: Left"
								value={ attributes.nameAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( nameAlign ) => setAttributes( { nameAlign: nameAlign } ) }
							/>
						</PanelRow>
						{ /* padding */ }
						<PanelRow>
							<TextControl
								className="nameInlinepadding"
								label="Padding"
								help="Example: 0 5px 5px 0"
								value={ attributes.namePadding }
								onChange={ value => setAttributes( { namePadding: value } ) }
							/>
						</PanelRow>
						{ /* line-height */ }
						<PanelRow>
							<TextControl
								className="nameInlineLineHeight"
								label="Line-height"
								help="Example: 100%"
								value={ attributes.nameLineHeight }
								onChange={ value => setAttributes( { nameLineHeight: value } ) }
							/>
						</PanelRow>
						{ /* font color */ }
						<PanelRow>
							<BaseControl
								id="nameFontColor"
								label={ __( 'Font Color' ) }
								help="Example: #959595"
							>
								<ColorPicker
									id="nameFontColor"
									color={ attributes.nameFontColor }
									onChangeComplete={ value => setAttributes( { nameFontColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						{ /* font family */ }
						<PanelRow>
							<TextControl
								label="Font Family"
								help="Example: Georgia, Times, serif"
								value={ attributes.nameFontFamily }
								onChange={ value => setAttributes( { nameFontFamily: value } ) }
							/>
						</PanelRow>
						{ /* font size */ }
						<PanelRow>
							<TextControl
								label="Font Size"
								help="Example: 14px"
								value={ attributes.nameFontSize }
								onChange={ value => setAttributes( { nameFontSize: value } ) }
							/>
						</PanelRow>
						{ /* font weight */ }
						<PanelRow>
							<TextControl
								label="Font Weight"
								help="Example: 400"
								value={ attributes.nameFontWeight }
								onChange={ value => setAttributes( { nameFontWeight: value } ) }
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
			tableDividerTop(),
			imageTable(),
			dataTable(),
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

	// The output on the live site
	// eslint-disable-next-line no-unused-vars
	save: props => {
		return null;
	},
} );
