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

const {
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
	ColorPicker,
	BaseControl,
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
registerBlockType( 'cgb/intermedia-newsletter-blocks-table', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Intermedia Newsletter Table' ), // Block title.
	icon: 'email-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'newsletter-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Intermedia Newsletter Blocks' ),
		__( 'Newsletter' ),
		__( 'Intermedia' ),
	],
	//----------------ATTRIBUTES----------------------------------------
	// Set up data model for custom block
	attributes: {
		// TABLE ATTRIBUTES / inline attributes
		tableWidth: {
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
		// CELL/TD ATTRIBUTES / inline attributes
		tdWidth: {
			type: 'string',
		},
		tdBgColor: {
			type: 'string',
		},
		tdAlign: {
			type: 'string',
		},
		tdValign: {
			type: 'string',
		},
		// CELL/TD ATTRIBUTES / inline style
		tdStyle: {
			type: 'array',
			default: [],
		},
		tdStyleMargin: {
			type: 'string',
		},
		tdStylePadding: {
			type: 'string',
		},
		tdStyleFontSize: {
			type: 'string',
		},
		tdStyleFontColor: {
			type: 'string',
		},
		tdStyleFontFamily: {
			type: 'string',
		},
		tdStyleFontWeight: {
			type: 'string',
		},
		tdStyleTextDecoration: {
			type: 'string',
		},
		tdStyleTextTransform: {
			type: 'string',
		},
		tdStyleLineHeight: {
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
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		attributes.classNames = 'deviceWidth';
		return (
			[
				<InspectorControls>
					<PanelBody title="Table Settings">
						<PanelRow>
							<TextControl
								className="tableWidth"
								label="Table width"
								help="Example: 580 / 100%"
								value={ attributes.tableWidth }
								onChange={ value => setAttributes( { tableWidth: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								className="tableBorder"
								label="Table border"
								help="Example: 0"
								value={ attributes.tableBorder }
								onChange={ value => setAttributes( { tableBorder: value } ) }
								initialPosition={ attributes.tableBorder } min={ 0 } max={ 20 }
							/>
						</PanelRow>
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
								label="Table Align"
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
					<PanelBody title="Table Inline CSS" >
						<PanelRow>
							<TextControl
								className="tableInlineMargin"
								label="Margin"
								help="Example: 0 auto"
								value={ attributes.tableStyleMargin }
								onChange={ value => setAttributes( { tableStyleMargin: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tableInlinePadding"
								label="Padding"
								help="Example: 0"
								value={ attributes.tableStylePadding }
								onChange={ value => setAttributes( { tableStylePadding: value } ) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Column Settings" >
						<PanelRow>
							<BaseControl
								id="columnColor"
								label={ __( 'Cell Background Color' ) }
								help="Example: #ffffff"
							>
								<ColorPicker
									id="columnColor"
									color={ attributes.tdBgColor }
									onChangeComplete={ value => setAttributes( { tdBgColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdWidth"
								label="Cell Width"
								help="Example: 100% / 580"
								value={ attributes.tdWidth }
								onChange={ value => setAttributes( { tdWidth: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Cell Align"
								help="Example: Center"
								value={ attributes.tdAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Left', value: 'left' },
									{ label: 'Center', value: 'center' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( tdAlign ) => setAttributes( { tdAlign: tdAlign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Cell Valign"
								help="Example: Center"
								value={ attributes.tdValign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Top', value: 'top' },
									{ label: 'Middle', value: 'middle' },
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Baseline', value: 'baseline' },
								] }
								onChange={ ( tdValign ) => setAttributes( { tdValign: tdValign } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlineMargin"
								label="Cell Margin"
								help="Example: 0 auto"
								value={ attributes.tdStyleMargin }
								onChange={ value => setAttributes( { tdStyleMargin: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlinePadding"
								label="Cell Padding"
								help="Example: 10px"
								value={ attributes.tdStylePadding }
								onChange={ value => setAttributes( { tdStylePadding: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlineFontSize"
								label="Cell Font Size"
								help="Example: 14px"
								value={ attributes.tdStyleFontSize }
								onChange={ value => setAttributes( { tdStyleFontSize: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlineFontFamily"
								label="Cell Font Family"
								help="Example: Georgia, Times, serif"
								value={ attributes.tdStyleFontFamily }
								onChange={ value => setAttributes( { tdStyleFontFamily: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								id="FontColor"
								label={ __( 'Cell Font Color' ) }
								help="Example: #666"
							>
								<ColorPicker
									id="FontColor"
									color={ attributes.tdStyleFontColor }
									onChangeComplete={ value => setAttributes( { tdStyleFontColor: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="tdInlineLineHeight"
								label="Cell Line-height"
								help="Example: normal"
								value={ attributes.tdStyleLineHeight }
								onChange={ value => setAttributes( { tdStyleLineHeight: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Cell Font Weight"
								help="Example: 400"
								value={ attributes.tdStyleFontWeight }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'Normal', value: 'normal' },
									{ label: 'Bold', value: 'bold' },
									{ label: 'Bolder', value: 'bolder' },
									{ label: 'Lighter', value: 'lighter' },
									{ label: '100', value: '100' },
									{ label: '200', value: '200' },
									{ label: '300', value: '300' },
									{ label: '400', value: '400' },
									{ label: '500', value: '500' },
									{ label: '600', value: '600' },
									{ label: '700', value: '700' },
									{ label: '800', value: '800' },
									{ label: '900', value: '900' },
								] }
								onChange={ ( tdStyleFontWeight ) => setAttributes( { tdStyleFontWeight: tdStyleFontWeight } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Text Decoration"
								help="Example: none"
								value={ attributes.tdStyleTextDecoration }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'None', value: 'none' },
									{ label: 'Overline', value: 'overline' },
									{ label: 'Underline', value: 'underline' },
									{ label: 'Line-through', value: 'line-through' },
									{ label: 'Underline & Overline', value: 'underline overline' },
								] }
								onChange={ ( tdStyleTextDecoration ) => setAttributes( { tdStyleTextDecoration: tdStyleTextDecoration } ) }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Text Transform"
								help="Example: none"
								value={ attributes.tdTextAlign }
								options={ [
									{ label: 'Select...', value: '' },
									{ label: 'None', value: 'none' },
									{ label: 'Uppercase', value: 'uppercase' },
								] }
								onChange={ ( tdStyleTextTransform ) => setAttributes( { tdStyleTextTransform: tdStyleTextTransform } ) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>,
				<table
					width={ attributes.tableWidth }
					border={ attributes.tableBorder }
					cellPadding={ attributes.cellPadding }
					cellSpacing={ attributes.cellSpacing }
					align={ attributes.tableAlign }
					bgcolor={ attributes.tableBgColor }
					className={ attributes.classNames }
					style={ attributes.tableStyle }
				>
					<tr>
						<td
							width={ attributes.tdWidth }
							bgcolor={ attributes.tdBgColor }
							valign={ attributes.tdValign }
							align={ attributes.tdAlign }
							style={ attributes.tdStyle }
						>
							<InnerBlocks />
						</td>
					</tr>
				</table>,
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
	save: ( props ) => {
		const { attributes } = props;
		//console.log( attributes.tableStyle );
		attributes.tableStyle = {
			margin: attributes.tableStyleMargin,
			padding: attributes.tableStylePadding,
			backgroundColor: attributes.tableBgColor,
		};
		attributes.tdStyle = {
			margin: attributes.tdStyleMargin,
			padding: attributes.tdStylePadding,
			fontSize: attributes.tdStyleFontSize,
			fontFamily: attributes.tdStyleFontFamily,
			color: attributes.tdStyleFontColor,
			fontWeight: attributes.tdStyleFontWeight,
			textDecoration: attributes.tdStyleTextDecoration,
			textAlign: attributes.tdAlign,
			textTransform: attributes.tdStyleTextTransform,
			lineHeight: attributes.tdLineHeight,
		};
		return (
			<table
				width={ attributes.tableWidth }
				border={ attributes.tableBorder }
				cellPadding={ attributes.cellPadding }
				cellSpacing={ attributes.cellSpacing }
				align={ attributes.tableAlign }
				bgcolor={ attributes.tableBgColor }
				className={ attributes.classNames }
				style={ attributes.tableStyle }
			>
				<tr>
					<td
						width={ attributes.tdWidth }
						bgcolor={ attributes.tdBgColor }
						valign={ attributes.tdValign }
						align={ attributes.tdAlign }
						style={ attributes.tdStyle }
					>
						<InnerBlocks.Content />
					</td>
				</tr>
			</table>
		);
	},
} );
