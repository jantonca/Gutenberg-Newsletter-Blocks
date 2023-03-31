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
registerBlockType( 'cgb/intermedia-newsletter-blocks-next-events', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Next Events' ), // Block title.
	icon: 'tickets-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	//----------------ATTRIBUTES----------------------------------------
	// Set up data model for custom block
	attributes: {
		//EVENTS AND QUERY ATTRIBUTES
		eventsQueryAmount: {
			type: 'number',
		},
		eventCategory: {
			type: 'string',
		},
		displayCategory: {
			type: 'boolean',
			default: false,
		},
		eventTag: {
			type: 'string',
		},
		displayTag: {
			type: 'boolean',
			default: false,
		},
		// TABLE DIVIDER
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
		// TABLE FEATURED IMAGE ATTRIBUTES / inline attributes
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
		// DATA CELL ATTRIBUTES
		// dataTdAlign: {
		// 	type: 'string',
		// },
		// dataTdValign: {
		// 	type: 'string',
		// },
		// dataTdClass: {
		// 	type: 'string',
		// },
		// dataTdStyle: {
		// 	type: 'array',
		// 	default: [],
		// },
		// dataTdStyleMargin: {
		// 	type: 'string',
		// },
		// dataTdStylePadding: {
		// 	type: 'string',
		// },
		// dataTdClassNames: {
		// 	type: 'string',
		// },
		// CELL ATTRIBUTES / POST TITLE
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
		// CELL ATTRIBUTES / POST date
		displaydate: {
			type: 'boolean',
			default: true,
		},
		dateValign: {
			type: 'string',
		},
		dateTdInlineStyle: {
			type: 'array',
			default: [],
		},
		datePadding: {
			type: 'string',
		},
		dateLineHeight: {
			type: 'string',
		},
		dateStyle: {
			type: 'array',
			default: [],
		},
		dateFontColor: {
			type: 'string',
		},
		dateFontFamily: {
			type: 'string',
		},
		dateFontSize: {
			type: 'string',
		},
		dateFontWeight: {
			type: 'string',
		},
		dateTextAlign: {
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
		if ( ! props.attributes.eventsQueryAmount ) {
			props.attributes.eventsQueryAmount = 1;
		}
		return {
			//eventsTags: select( 'core' ).getEntityRecords( 'taxonomy', 'events_tags', { per_page: -1, page: 1, _fields: 'name, id' } ),
			//eventsCategories: select( 'core' ).isResolving( 'getEntityRecords', [ 'postType', 'posts', { per_page: -1, page: 1 } ] ),
		};
	} )( ( { attributes, setAttributes } ) => {
		// STARTS EVENTS SETTINGS SECTION
		const imageCrops = window.intermediaNewsletterBlocksGlobal.image_crops;
		const toggleDisplayCategory = () => {
			setAttributes( { displayCategory: ! attributes.displayCategory } );
		};
		const toggleDisplayTag = () => {
			setAttributes( { displayTag: ! attributes.displayTag } );
		};
		if ( ! attributes.displayCategory ) {
			setAttributes( { eventCategory: '' } );
		}
		if ( ! attributes.displayTag ) {
			setAttributes( { eventTag: '' } );
		}
		const eventsCategoriesTotal = window.intermediaNewsletterBlocksGlobal.ai1ec_terms.categories;
		const eventstagsTotal = window.intermediaNewsletterBlocksGlobal.ai1ec_terms.tags;

		const toggleDisplayFeaturedImage = () => {
			setAttributes( { displayFeaturedImage: ! attributes.displayFeaturedImage } );
		};
		const toggleDisplaydate = () => {
			setAttributes( { displaydate: ! attributes.displaydate } );
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
		const featuredImageItem = () => {
			if ( ! attributes.imageWidth ) {
				attributes.imageWidth = 150;
			}
			return (
				<img
					width={ attributes.imageWidth }
					border={ attributes.imageborder }
					alt=""
					src="https://via.placeholder.com/150"
					className="featured-image"
				/>
			);
		};
		const imageTable = () => {
			if ( attributes.displayFeaturedImage ) {
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
								{ featuredImageItem() }
							</td>
						</tr>
					</table>
				);
			}
		};
		// ENDS TABLE IMAGE SECTION
		// STARTS TABLE DATA SECTION
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
		const eventTitle = ( n ) => {
			return (
				<tr>
					<td
						align={ attributes.titleTdAlign }
						valign={ attributes.titleTdValign }
						style={ attributes.titleTdStyles }>
						<a href="#events" style={ attributes.titleLinkStyle } className="title" >
							My event number { n }
						</a>
					</td>
				</tr>
			);
		};
		attributes.dateStyle = {
			color: attributes.dateFontColor,
			fontFamily: attributes.dateFontFamily,
			fontSize: attributes.dateFontSize,
			fontWeight: attributes.dateFontWeight,
			textAlign: attributes.dateTextAlign,
		};
		attributes.dateTdInlineStyle = {
			textAlign: attributes.dateTextAlign,
			padding: attributes.datePadding,
		};
		const dateItem = () => {
			if ( attributes.displaydate ) {
				return (
					<tr>
						<td
							align={ attributes.dateTextAlign }
							valign={ attributes.dateValign }
							style={ attributes.dateTdInlineStyle }>
							<p style={ attributes.dateStyle } className="date-admin" >May 18, 2020</p>
						</td>
					</tr>
				);
			}
		};
		attributes.dateTdInlineStyle = {
			padding: attributes.datePadding,
			lineHeight: attributes.dateLineHeight,
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
					<tr>
						<td>
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
											href="#event"
											style={ attributes.buttonLinkStyle }
										>
											{ attributes.buttonText }
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				);
			}
		};
		const dataTable = ( n ) => {
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
					{ eventTitle( n ) }
					{ dateItem() }
					{ buttonItem() }
				</table>
			);
		};
		const tableDivider = () => {
			attributes.dividerStyle = {
				margin: '0 auto',
				height: attributes.dividerHeight,
				backgroundColor: attributes.dividerBgColor,
				clear: 'both',
			};
			return (
				<div className="table-divider" style={ attributes.dividerStyle } >&nbsp;</div>
			);
		};
		const displayTable = () => {
			const item = [];
			for ( let n = 0; n < attributes.eventsQueryAmount; n++ ) {
				if ( n !== attributes.eventsQueryAmount - 1 ) {
					item.push(
						<div>
							{ imageTable() }
							{ dataTable( n ) }
							{ tableDivider() }
						</div>
					);
				} else {
					item.push(
						<div>
							{ imageTable() }
							{ dataTable( n ) }
						</div>
					);
				}
			}
			return item;
		};
		return ( [
			<InspectorControls>
				<PanelBody title="Query Settings">
					<PanelRow>
						<RangeControl
							className="eventsQueryAmount"
							label="Evens amount"
							help={ 'Select the amount of events to display.' }
							value={ attributes.eventsQueryAmount }
							onChange={ value => setAttributes( { eventsQueryAmount: value } ) }
							initialPosition={ attributes.eventsQueryAmount } min={ 1 } max={ 20 }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Filter with categories' ) }
							checked={ !! attributes.displayCategory }
							onChange={ toggleDisplayCategory }
						/>
					</PanelRow>
					{ attributes.displayCategory &&
					<PanelRow>
						<SelectControl
							className="nextEventsCategories"
							label={ __( 'Select an event category:' ) }
							value={ attributes.eventCategory }
							onChange={ ( value ) => {
								setAttributes( { eventCategory: value } );
							} }
							options={ eventsCategoriesTotal }
						/>
					</PanelRow>
					}
					<PanelRow>
						<ToggleControl
							label={ __( 'Filter with tags' ) }
							checked={ !! attributes.displayTag }
							onChange={ toggleDisplayTag }
						/>
					</PanelRow>
					{ attributes.displayTag &&
					<PanelRow>
						<SelectControl
							className="nextEventsTags"
							label={ __( 'Select an event tag:' ) }
							value={ attributes.eventTag }
							onChange={ ( value ) => {
								setAttributes( { eventTag: value } );
							} }
							options={ eventstagsTotal }
						/>
					</PanelRow>
					}
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
							label={ __( 'Display Date' ) }
							checked={ !! attributes.displaydate }
							onChange={ toggleDisplaydate }
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

				<InspectorControls>
					<PanelBody title="Divider Settings" >
						<PanelRow>
							<RangeControl
								className="dividerHeight"
								label="Divider Height"
								help="Example: 15"
								value={ attributes.dividerHeight }
								onChange={ value => setAttributes( { dividerHeight: value } ) }
								initialPosition={ attributes.dividerHeight } min={ 0 } max={ 100 }
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
				</InspectorControls>
				{ attributes.displayFeaturedImage &&
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
					{ /* 					<PanelRow>
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
					</PanelRow> */ }
					{ /* 					<PanelRow>
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
					</PanelRow> */ }
					<PanelRow>
						<TextControl
							className="dataTableClassNames"
							label="Table class names"
							help="Example: my-class"
							value={ attributes.dataTableClassNames }
							onChange={ value => setAttributes( { dataTableClassNames: value } ) }
						/>
					</PanelRow>
					{ /* 					<PanelRow>
						<TextControl
							className="dataTdClassNames"
							label="Cell class names"
							help="Example: my-class"
							value={ attributes.dataTdClassNames }
							onChange={ value => setAttributes( { dataTdClassNames: value } ) }
						/>
					</PanelRow> */ }
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
				{ attributes.displaydate &&
					<PanelBody title="Date Settings">
						<PanelRow>
							<SelectControl
								label="date valign"
								help="Example: Middle"
								value={ attributes.dateValign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Top', value: 'top' },
									{ label: 'Middle', value: 'middle' },
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Baseline', value: 'baseline' },
								] }
								onChange={ ( dateValign ) => setAttributes( { dateValign: dateValign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="dateInlinepadding"
								label="Padding"
								help="Example: 0 5px 5px 0"
								value={ attributes.datePadding }
								onChange={ value => setAttributes( { datePadding: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="dateInlineLineHeight"
								label="Line-height"
								help="Example: 100%"
								value={ attributes.dateLineHeight }
								onChange={ value => setAttributes( { dateLineHeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="dateFontColor"
								label={ __( 'Font Color' ) }
								help="Example: #959595"
							>
								<ColorPicker
									id="dateFontColor"
									color={ attributes.dateFontColor }
									onChangeComplete={ value => setAttributes( { dateFontColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Family"
								help="Example: Georgia, Times, serif"
								value={ attributes.dateFontFamily }
								onChange={ value => setAttributes( { dateFontFamily: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Size"
								help="Example: 14px"
								value={ attributes.dateFontSize }
								onChange={ value => setAttributes( { dateFontSize: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Font Weight"
								help="Example: 400"
								value={ attributes.dateFontWeight }
								onChange={ value => setAttributes( { dateFontWeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Text align"
								help="Example: Left"
								value={ attributes.dateTextAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( dateTextAlign ) => setAttributes( { dateTextAlign: dateTextAlign } ) }
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
			// imageTable(),
			// dataTable(),
			displayTable(),

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
